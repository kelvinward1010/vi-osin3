import "antd/dist/antd.css";
import "@aiacademy/web-tokens/css/styles.css";

import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import "./locales/i18n";
import { Liquid } from "@ant-design/charts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={viVN}>
        <RouterProvider router={routers} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.accept(["./locales/i18n"], () => {});
}
