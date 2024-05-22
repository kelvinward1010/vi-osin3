import { getPipelineActionInfos } from "@/services/pipeline.service";
import { useQuery } from "react-query";

export const PIPELINE_ACTION_INFOS = "pipeline_action_infos";

export const usePipelineActionInfo = () => {
  return useQuery([PIPELINE_ACTION_INFOS], () => getPipelineActionInfos());
};
