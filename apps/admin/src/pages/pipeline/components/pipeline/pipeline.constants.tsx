import {
  ActionGotoIcon,
  ActionKeyboardPressIcon,
  ActionGetContentIcon,
  ActionWhileIcon,
  ActionClick,
  ActionScrollIcon,
  ActionAttributeIcon,
  ActionForIcon,
} from "@/assets/svg";
import { TreeItems } from "./pipeline.types";

export const PIPELINE_ACTION_ICON: Record<string, JSX.Element> = {
  goto: <ActionGotoIcon />,
  keyboard_press: <ActionKeyboardPressIcon />,
  get_content: <ActionGetContentIcon />,
  while: <ActionWhileIcon />,
  click: <ActionClick />,
  scroll: <ActionScrollIcon />,
  attribute: <ActionAttributeIcon />,
  for: <ActionForIcon />,
};

export const DEFAULT_INITAL_PIPELINE: TreeItems = [
  {
    id: "goto-temp",
    children: [],
    data: {
      id: "go to",
      action_type: "common",
      display_name: "Go to",
      name: "name",
      param_infos: [],
      readme: "Mở địa chỉ URL",
      z_index: 1,
    },
  },
];
