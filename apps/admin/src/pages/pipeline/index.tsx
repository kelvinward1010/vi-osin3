import { SplashScreen } from "@/components";
import { lazyLoad } from "@/utils/loadable";

export { PipelineLayout } from "./components/pipeline-layout";

export const DashboardStatistics = lazyLoad(
  () => import("./views/dashboard-statistics"),
  (module) => module.DashboardStatistics,
  {
    fallback: <SplashScreen />,
  },
);

export const DataProcessing = lazyLoad(
  () => import("./views/data-processing"),
  (module) => module.DataProcessing,
  {
    fallback: <SplashScreen />,
  },
);

export const InformationGathering = lazyLoad(
  () => import("./views/information-gathering"),
  (module) => module.InformationGathering,
  {
    fallback: <SplashScreen />,
  },
);
