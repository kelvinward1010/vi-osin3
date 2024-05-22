import { apiClient } from "@/utils/api";
import { ICartoon2D } from "./cartoons.types";

const apiCartoonsBaseUrl = "/cartoons";

export const getCartoons2D = async () => {
  const url = `${apiCartoonsBaseUrl}`;
  try {
    const result = await apiClient.get<ICartoon2D[]>(url);
    return {
      cartoons: result.data,
    };
  } catch {
    return {};
  }
};

export const getCartoons2DDetail = async (cartoonId: string) => {
  const url = `${apiCartoonsBaseUrl}/${cartoonId}`;
  try {
    const result = await apiClient.get<ICartoon2D>(url);
    return {
      cartoon: result.data,
    };
  } catch {
    return {};
  }
};
