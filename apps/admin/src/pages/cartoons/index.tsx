import { SplashScreen } from "@/components";
import { lazyLoad } from "@/utils/loadable";

export const Cartoons2DListPage = lazyLoad(
  () => import("./cartoons-list.page"),
  (module) => module.Cartoons2DListPage,
  {
    fallback: <SplashScreen />,
  },
);

export const Cartoons2DDetailPage = lazyLoad(
  () => import("./cartoons-detail.page"),
  (module) => module.Cartoons2DDetailPage,
  {
    fallback: <SplashScreen />,
  },
);
