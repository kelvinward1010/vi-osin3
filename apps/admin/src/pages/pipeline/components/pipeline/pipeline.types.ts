import type { MutableRefObject } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { IActionPayload } from "@/services/pipeline.types";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  collapsed?: boolean;
  data?: IActionPayload;
}

export type TreeItems = TreeItem[];

export interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export type SensorContext = MutableRefObject<{
  items: FlattenedItem[];
  offset: number;
}>;

export type ActionItems = ActionItem[];

export interface ActionItem {
  id: string;
  data?: ActionItemData;
}

export interface ActionItemData {
  display_name: string;
  name: string;
  readme: string;
  isCollapse?: boolean;
}
