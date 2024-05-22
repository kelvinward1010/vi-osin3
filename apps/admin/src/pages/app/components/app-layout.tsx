import React from "react";
import { Outlet } from "react-router-dom";
import { AppFilter } from "./app-filter";
import { AppHeader } from "./app-header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <AppFilter />
      <Outlet />
    </>
  );
};
