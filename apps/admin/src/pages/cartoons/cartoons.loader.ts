import { useQuery } from "react-query";
import { getCartoons2D, getCartoons2DDetail } from "@/services/cartoons.service";

export const CARTOONS2D_LIST_KEY = "cartoons2d_list_key";
export const CARTOONS2D_DETAIL_KEY = "cartoons2d_detail_key";

export const useCartoons2D = () => {
  return useQuery([CARTOONS2D_LIST_KEY], () => getCartoons2D());
};

export const useCartoonDetail2D = (cartoonId: string) => {
  return useQuery([CARTOONS2D_DETAIL_KEY, cartoonId], () => getCartoons2DDetail(cartoonId));
};
