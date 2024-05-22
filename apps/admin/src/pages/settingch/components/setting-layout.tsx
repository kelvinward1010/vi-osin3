import { AppContainer } from "@/pages/app";
import { settingAccount, settingDataNews, settingOrganize, settingPathMain, settingResources, settingTopic } from "@/pages/router";
import { Menu, MenuProps } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const SettingLayout: React.FC = () => {
  return (
    <AppContainer sidebar={<Sidebar />}>
      <Outlet />
    </AppContainer>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation("translation", { keyPrefix: "setting" });

  const items: MenuProps["items"] = [
    { label: t("pathmain"), key: settingPathMain },
    { label: t("data-news-setting"), key: settingDataNews },
    { label: t("setting-topic"), key: settingTopic },
    { label: t("setting-resources"), key: settingResources },
    { label: t("setting-organize"), key: settingOrganize },
    { label: t("setting-account"), key: settingAccount },
  ];

  return <Menu items={items} selectedKeys={[pathname]} onClick={handleClickMenu} />;

  function handleClickMenu({ key }: { key: string }) {
    navigate(key);
  }
};
