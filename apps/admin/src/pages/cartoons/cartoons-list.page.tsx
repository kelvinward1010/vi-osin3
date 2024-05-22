import { Menu } from "antd";
import React from "react";
import { AppContainer } from "@/pages/app";
import { useCartoons2D } from "./cartoons.loader";
import { Cartoons2DTable } from "./components/cartoons-table";

export const Cartoons2DListPage: React.FC = () => {
  const { data, isLoading } = useCartoons2D();

  return (
    <AppContainer sidebar={<SidebarFake />}>
      <Cartoons2DTable isLoading={isLoading} cartoons={data?.cartoons} />
    </AppContainer>
  );
};

const SidebarFake = () => {
  return (
    <Menu>
      <Menu.Item>item 1</Menu.Item>
      <Menu.Item>item 2</Menu.Item>
      <Menu.SubMenu title="sub menu">
        <Menu.Item>item 3</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};
