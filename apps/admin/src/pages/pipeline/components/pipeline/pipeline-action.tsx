import { Col, Row } from "antd";
import { useDraggable } from "@dnd-kit/core";
import { PIPELINE_ACTION_ICON } from "../pipeline/pipeline.constants";
import styles from "./pipeline-action.module.less";
import type { IActionPayload } from "@/services/pipeline.types";

interface Props {
  id: string;
  data: Omit<IActionPayload, "id">;
}

export const PipelineAction = ({ id, data }: Props) => {
  const { setNodeRef, transform, attributes, listeners } = useDraggable({
    id,
    data: data,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      data-cypress="draggable-item"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={styles.wrapper}
    >
      <Row className={styles.treeitem} align="middle" wrap={false}>
        <Col flex="0 0 40px" className={styles.icon}>
          {PIPELINE_ACTION_ICON[data.name]}
        </Col>
        <Col className={styles.text} flex="1 1 auto" title={data.readme}>
          {data.display_name}
        </Col>
      </Row>
    </div>
  );
};
