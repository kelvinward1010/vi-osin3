import { apiClient } from "@/utils/api";
import produce from "immer";
import { nanoid } from "nanoid";
import { IPipelineActionInfos } from "./pipeline.types";

const apiPipelineBaseUrl = "";

export const getPipelineActionInfos = async () => {
  const url = `${apiPipelineBaseUrl}/get_action_infos`;
  const result = await apiClient.get<IPipelineActionInfos>(url);

  return produce(result.data.Payload, (draft) => {
    for (const item of draft) {
      item.id = nanoid();
    }
  });
};
