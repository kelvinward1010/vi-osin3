import { CloseCircleOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
  DropAnimation,
  defaultDropAnimation,
  Modifier,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import produce from "immer";
import { nanoid } from "nanoid";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { ActionLogIcon, ActionReloadIcon, ActionRunIcon, ActionStopIcon } from "@/assets/svg";
import {
  buildTree,
  flattenTree,
  getChildCount,
  getProjection,
  removeChildrenOf,
  removeItem,
  setProperty,
} from "./pipeline.utilities";
import { PipelineSortableItem } from "./pipeline-sortable-item";
import { PipelineAction } from "./pipeline-action";
import "./pipeline.less";
import type { FlattenedItem, TreeItems } from "./pipeline.types";
import type { IActionPayload } from "@/services/pipeline.types";

const { Paragraph } = Typography;

interface Props {
  initialItems: TreeItems;
  initialAction?: IActionPayload[];
  indentationWidth?: number;
}

export const Pipeline = ({ indentationWidth = 40, initialItems, initialAction }: Props) => {
  const { t } = useTranslation("translation", { keyPrefix: "pipeline" });
  const [pipelineName, setPipelineName] = useState<string>(t("name_pipeline"));
  const [items, setItems] = useState(() => initialItems);
  const [clonedItems, setClonedItem] = useState<TreeItems | null>(null);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [actions, setActions] = useState(() => initialAction);
  const [setting, setSetting] = useState<IActionPayload | null>(null);

  const flattenedItems = useMemo(() => {
    const flattenedTree = flattenTree(items);
    const collapsedItems = flattenedTree.reduce<UniqueIdentifier[]>(
      (acc, { children, collapsed, id }) => (collapsed && children.length ? [...acc, id] : acc),
      [],
    );

    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems,
    );
  }, [activeId, items]);

  const sortedIds = useMemo(() => flattenedItems.map(({ id }) => id), [flattenedItems]);
  const activeItem = activeId ? flattenedItems.find(({ id }) => id === activeId) : null;

  const projected =
    activeId && sortedIds.includes(activeId) && overId
      ? getProjection(flattenedItems, activeId, overId, offsetLeft, indentationWidth)
      : null;

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      onDragCancel={handleDragCancel}
    >
      <Row className="pipeline">
        <Col span={5}>
          <Card title="Action" className="pipeline-actions">
            {actions?.map(({ id, ...props }) => (
              <PipelineAction key={id} id={id} data={props} />
            ))}
          </Card>
        </Col>
        <Col span={18} offset={1}>
          <Card
            className="pipeline-dnd"
            title={
              <Paragraph
                editable={{
                  icon: <EditOutlined />,
                  tooltip: "Sua ten pipeline",
                  onChange: setPipelineName,
                  triggerType: ["text", "icon"],
                  enterIcon: null,
                }}
              >
                {pipelineName}
              </Paragraph>
            }
            extra={
              <Space>
                <Button icon={<ActionStopIcon />} />
                <Button icon={<ActionRunIcon />} />
                <Button icon={<ActionReloadIcon />} />
                <Button icon={<ActionLogIcon />} />
                <Button icon={<PlusOutlined />} />
              </Space>
            }
          >
            <Row gutter={8}>
              <Col span={setting ? 12 : 16} offset={setting ? 2 : 4}>
                <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
                  {flattenedItems.map(({ id, children, collapsed, depth, data }) => (
                    <PipelineSortableItem
                      key={id}
                      id={id}
                      depth={id === activeId && projected ? projected.depth : depth}
                      indentationWidth={indentationWidth}
                      collapsed={Boolean(collapsed && children.length)}
                      onCollapse={children.length ? () => handleCollapse(id) : undefined}
                      onRemove={() => handleRemove(id)}
                      onSetting={() => setSetting(data ?? null)}
                      indicator={true}
                      data={data}
                    />
                  ))}
                </SortableContext>
              </Col>
              {setting && (
                <Col span={8} offset={2}>
                  <Card
                    title="Options"
                    className="pipeline-options"
                    extra={<CloseCircleOutlined onClick={() => setSetting(null)} />}
                  >
                    {setting.display_name}
                  </Card>
                </Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
      {createPortal(
        <DragOverlay
          dropAnimation={dropAnimationConfig}
          modifiers={[adjustTranslate]}
          zIndex={1000}
        >
          {activeId && activeItem ? (
            <PipelineSortableItem
              id={activeId}
              depth={activeItem.depth}
              clone
              childCount={getChildCount(items, activeId) + 1}
              indentationWidth={indentationWidth}
              data={activeItem.data}
            />
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    setActiveId(activeId);
    setOverId(activeId);
    setClonedItem(items);
    document.body.style.setProperty("cursor", "grabbing");
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    setOffsetLeft(delta.x);
  }

  function handleDragOver({ over, active }: DragOverEvent) {
    const overId = over?.id ?? null;

    if (sortedIds.includes(active.id)) {
      setOverId(overId);
      return;
    }

    setItems(
      produce((draft) => {
        draft.push({ id: active.id, children: [], data: active.data.current as any });
      }),
    );
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem[] = JSON.parse(JSON.stringify(flattenTree(items)));
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      setItems(newItems);
      resetActionId(active.id);
    }
  }

  function handleDragCancel() {
    if (clonedItems) {
      setItems(clonedItems);
    }
    resetActionId(activeId!);
    setClonedItem(null);
    resetState();
  }

  function handleRemove(id: UniqueIdentifier) {
    setItems((items) => {
      const newItems = removeItem(items, id);
      if (newItems.length === 0) {
        return [{ id: "Goto", children: [] }];
      }
      return newItems;
    });
  }

  function handleCollapse(id: UniqueIdentifier) {
    setItems((items) =>
      setProperty(items, id, "collapsed", (value) => {
        return !value;
      }),
    );
  }

  function resetState() {
    setActiveId(null);
    setOverId(null);
    setOffsetLeft(0);

    document.body.style.setProperty("cursor", "");
  }

  function resetActionId(id: UniqueIdentifier) {
    setActions(
      produce((draft) => {
        const actionIndex = draft!.findIndex((action) => action.id === id);
        if (actionIndex === -1) return;
        draft![actionIndex!].id = nanoid();
      }),
    );
  }
};

const dropAnimationConfig: DropAnimation = {
  keyframes({ transform }) {
    return [
      { opacity: 1, transform: CSS.Transform.toString(transform.initial) },
      {
        opacity: 0,
        transform: CSS.Transform.toString({
          ...transform.final,
          x: transform.final.x + 5,
          y: transform.final.y + 5,
        }),
      },
    ];
  },
  easing: "ease-out",
  sideEffects({ active }) {
    active.node.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: defaultDropAnimation.duration,
      easing: defaultDropAnimation.easing,
    });
  },
};

const adjustTranslate: Modifier = ({ transform }) => {
  return {
    ...transform,
    x: transform.x - 10,
    y: transform.y - 5,
  };
};
