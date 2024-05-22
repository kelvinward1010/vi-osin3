import { CSSProperties } from "react";
import { AnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PipelineTreeItem, Props as TreeItemProps } from "./pipeline-tree-item";
import { iOS } from "../pipeline/pipeline.utilities";
import type { UniqueIdentifier } from "@dnd-kit/core";

const animateLayoutChanges: AnimateLayoutChanges = ({ isSorting, wasDragging }) =>
  isSorting || wasDragging ? false : true;

interface Props extends TreeItemProps {
  id: UniqueIdentifier;
}

export function PipelineSortableItem({ id, depth, ...props }: Props) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <PipelineTreeItem
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableSelection={iOS}
      disableInteraction={isSorting}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
