import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./pages/app";
import { AuthLayout } from "./pages/auth/";
import { DashboardLayout } from "./pages/dashboard/";
import { Cartoons2DDetailPage, Cartoons2DListPage } from "./pages/cartoons";
import { ErrorBoundary } from "./pages/errors/error-boundary";
import { QuickReport, SyntheticReport, PeriodicReport, ReportLayout } from "./pages/reports";
import {
  analysisPath,
  authForgotPasswordPath,
  authLoginPath,
  cartoons2DDetailPath,
  cartoons2DListPath,
  dashboardAdminPath,
  dashboardExpertPath,
  dashboardLeaderPath,
  dashboardSearchPath,
  databasePath,
  databaseSettingPath,
  homePath,
  newsPath,
  organizationPath,
  reportPath,
  reportPeriodicPath,
  reportQuickPath,
  reportSyntheticPath,
  settingPath,
  socialPath,
  pipelineDashboard,
  pipelineDataProcessing,
  pipelineInformationGathering,
  settingPathMain,
  settingDataNews,
  settingTopic,
  settingResources,
  settingOrganize,
  settingAccount,
} from "./pages/router";
import {
  DashboardStatistics,
  PipelineLayout,
  DataProcessing,
  InformationGathering,
} from "./pages/pipeline";
import { SettingLayout } from "./pages/settingch/components/setting-layout";
import { SettingMain } from "./pages/settingch/views/setting-main";
import { DataNews } from "./pages/settingch/views/data-news";
import { SettingTopic } from "./pages/settingch/views/setting-topic";
import { SettingResources } from "./pages/settingch/views/setting-resources";
import { SettingOrganize } from "./pages/settingch/views/setting-organize";
import { SettingAccount } from "./pages/settingch/views/setting-account";

export const routers = createBrowserRouter([
  {
    path: homePath,
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: cartoons2DListPath,
        element: <Cartoons2DListPage />,
      },
      {
        path: cartoons2DDetailPath,
        element: <Cartoons2DDetailPage />,
      },
      {
        path: newsPath,
      },
      {
        path: organizationPath,
      },
      {
        path: socialPath,
      },
      {
        path: analysisPath,
      },
      {
        path: databasePath,
      },
      {
        element: <ReportLayout />,
        children: [
          {
            path: reportPath,
            element: <Navigate to={reportQuickPath} />,
          },
          {
            path: reportPeriodicPath,
            element: <PeriodicReport />,
          },
          {
            path: reportQuickPath,
            element: <QuickReport />,
          },
          {
            path: reportSyntheticPath,
            element: <SyntheticReport />,
          },
        ],
      },

      {
        element: <PipelineLayout />,
        children: [
          {
            path: pipelineDashboard,
            element: <DashboardStatistics />,
          },
          {
            path: pipelineDataProcessing,
            element: <DataProcessing />,
          },
          {
            path: pipelineInformationGathering,
            element: <InformationGathering />,
          },
        ],
      },
      {
        element: <SettingLayout />,
        children: [
          {
            path: settingPathMain,
            element: <SettingMain />
          },
          {
            path: settingDataNews,
            element: <DataNews />
          },
          {
            path: settingTopic,
            element: <SettingTopic />
          },
          {
            path: settingResources,
            element: <SettingResources/>
          },
          {
            path: settingOrganize,
            element: <SettingOrganize />
          },
          {
            path: settingAccount,
            element: <SettingAccount />
          }
        ]
      },
      {
        path: databaseSettingPath,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: dashboardLeaderPath,
      },
      {
        path: dashboardExpertPath,
      },
      {
        path: dashboardAdminPath,
      },
      {
        path: dashboardSearchPath,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: authLoginPath,
      },
      {
        path: authForgotPasswordPath,
      },
    ],
  },
]);
