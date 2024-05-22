export interface IActionParamInfo {
  default_val: string;
  display_name: string;
  name: string;
  val_type: string;
  validators: string[];
  z_index: number;
  options: string[];
}

export interface IActionPayload {
  id: string;
  action_type: string;
  display_name: string;
  name: string;
  param_infos: IActionParamInfo[];
  readme: string;
  z_index: number;
  isCollapse?: boolean;
}

export interface IPipelineActionInfos {
  Payload: IActionPayload[];
  Success: boolean;
}
