import {
  AnalysisIcon,
  AppIcon,
  DatabaseIcon,
  DatabaseSettingIcon,
  NewsIcon,
  OrganizationIcon,
  ReportIcon,
  SettingIcon,
  SocialIcon,
} from "@/assets/svg";

import {
  analysisPath,
  pipelinePath,
  databasePath,
  databaseSettingPath,
  newsPath,
  organizationPath,
  reportPath,
  settingPath,
  socialPath,
} from "@/pages/router";

export const DEFAULT_ENTITY_EXPLORER_WIDTH = 270;
export const DEFAULT_ENTITY_EXPLORER_PINNED = false;
export const DEFAULT_ENTITY_EXPLORER_ACTIVE = false;

export const NAVBAR_HEADER = [
  {
    title: "News",
    to: newsPath,
    icon: <NewsIcon />,
  },
  {
    title: "Organization",
    to: organizationPath,
    icon: <OrganizationIcon />,
  },
  {
    title: "Social",
    to: socialPath,
    icon: <SocialIcon />,
  },
  {
    title: "Analysis",
    to: analysisPath,
    icon: <AnalysisIcon />,
  },
  {
    title: "Database",
    to: databasePath,
    icon: <DatabaseIcon />,
  },
  {
    title: "Report",
    to: reportPath,
    icon: <ReportIcon />,
  },
  {
    title: "App",
    to: pipelinePath,
    icon: <AppIcon />,
  },
  {
    title: "Setting",
    to: settingPath,
    icon: <SettingIcon />,
  },
  {
    title: "Database setting",
    to: databaseSettingPath,
    icon: <DatabaseSettingIcon />,
  },
];
