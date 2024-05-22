import { Button, Space, Table, TableColumnsType } from "antd";
import React from "react";
import dayjs from "dayjs";
import Icon from "@ant-design/icons";
import {
  PipelineCloneIcon,
  PipelineHistoryIcon,
  PipelineRunIcon,
  PipelineSleepIcon,
  PipelineStandIcon,
} from "@/assets/svg";
import { SwitchCustom } from "@/components/";
import data from "./data.json";
import type { IPipelineTableData } from "./types";
import { useTranslation } from "react-i18next";

interface Props {
  onHistory?(): void;
}

export const PipelineTable: React.FC<Props> = ({ onHistory }) => {
  const { t } = useTranslation("translation", { keyPrefix: "pipeline" });
  const columns: TableColumnsType<IPipelineTableData> = [
    {
      title: t("id_pipeline"),
      key: "_id",
      dataIndex: "_id",
    },
    {
      title: t("name_pipeline"),
      key: "name",
      dataIndex: "name",
    },
    {
      title: t("create_at"),
      key: "created_at",
      dataIndex: "created_at",
      render: (createAt: number) => dayjs.unix(createAt).format("DD-MM-YYYY"),
    },
    {
      title: t("active"),
      dataIndex: "active",
      align: "center",
      render: (active: number) => {
        return (
          <SwitchCustom
            checkedChildren="Enable"
            unCheckedChildren="Disable"
            defaultChecked={!!active}
            isSquare
          />
        );
      },
    },
    {
      title: t("activity"),
      dataIndex: "state",
      render: (state: "STOP" | "RUN") => {
        return (
          <SwitchCustom
            checkedChildren="Stop"
            unCheckedChildren="Run"
            defaultChecked={state === "RUN"}
            isColorful
          />
        );
      },
    },
    {
      title: t("status"),
      dataIndex: "status",
      render: (status: number) => {
        return (
          <Space align="center">
            <PipelineStandIcon className={status === 0 ? "active" : ""} />
            <PipelineSleepIcon className={status === 1 ? "active" : ""} />
            <PipelineRunIcon className={status === 2 ? "active" : ""} />
          </Space>
        );
      },
    },
    {
      title: t("collect_history"),
      align: "center",
      render: () => {
        return <Button onClick={onHistory} icon={<PipelineHistoryIcon />} type="primary" />;
      },
    },
    {
      title: t("action"),
      align: "center",
      render: () => {
        return <Icon style={{ fontSize: 16 }} component={PipelineCloneIcon} onClick={() => {}} />;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data.data}
      rowKey="_id"
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  );
};
