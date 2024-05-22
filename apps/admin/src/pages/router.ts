export const homePath = "/";

export const cartoons2DListPath = "cartoons2d";
export const cartoons2DDetailPath = "cartoons2d/:cartoonId";
export const getCartoons2DDetailUrl = (cartoonId: string | number) => `/cartoons2d/${cartoonId}`;

export const authLoginPath = "login";
export const authForgotPasswordPath = "forgot-password";

export const dashboardLeaderPath = "/dashboard/leader";
export const dashboardExpertPath = "/dashboard/expert";
export const dashboardAdminPath = "/dashboard/admin";
export const dashboardSearchPath = "/dashboard/search";

// export const newsPath = "/news";
export const newsPath = cartoons2DListPath;

export const organizationPath = "/organization";

export const socialPath = "/social";

export const analysisPath = "/analysis";

export const databasePath = "/database";

export const reportPath = "/report";

export const reportPeriodicPath = "/report/periodic";
export const getReportPeriodicUrl = (reportId: string | number) => `/report/periodic/${reportId}`;

export const reportQuickPath = "/report/quick/:id";
export const getReportQuickUrl = (reportId: string | number) => `/report/quick/${reportId}`;

export const reportSyntheticPath = "/report/synthetic/:id";
export const getReportSyntheticUrl = (reportId: string | number) => `/report/synthetic/${reportId}`;

export const pipelineDashboard = "/pipeline/dashboard";
export const pipelineDataProcessing = "/pipeline/data-processing";
export const pipelineInformationGathering = "/pipeline/information-gathering";
export const pipelinePath = pipelineDashboard;

export const settingPathMain = "/setting";
export const settingDataNews = "setting/data-news";
export const settingTopic = "setting/setting-topic";
export const settingResources = "setting/setting-resources";
export const settingOrganize = "setting/setting-organize";
export const settingAccount = "setting/setting-account";
export const settingPath = settingPathMain;

export const databaseSettingPath = "/database-setting";
