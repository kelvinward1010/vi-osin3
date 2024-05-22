import { PlusOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Input, Space, Button, Modal } from "antd";
import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ActionReloadIcon, ActionRunIcon, ActionStopIcon } from "@/assets/svg";
import { Pipeline } from "../components/pipeline";
import { PipelineHistory } from "../components/pipeline-history";
import { PipelineTable } from "../components/pipeline-table";
import { DEFAULT_INITAL_PIPELINE } from "../components/pipeline/pipeline.constants";
import { usePipelineActionInfo } from "../pipeline.loader";
import styles from "./information-gathering.module.less";

const { Title } = Typography;
const { Search } = Input;

export const InformationGathering: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "pipeline" });
  const { data } = usePipelineActionInfo();

  return (
    <div id="pipeline-gathering" className={classNames(styles.informationGathering, "modal-mount")}>
      <Title level={2} className={styles.title}>
        {t("title_information_gathering")}
      </Title>
      <Row justify="space-between">
        <Col span={6}>
          <Search placeholder={t("search_here")} />
        </Col>
        <Col>
          <Space align="end">
            <Button icon={<ActionStopIcon />} />
            <Button icon={<ActionRunIcon />} />
            <Button icon={<ActionReloadIcon />} />
            <Button onClick={showModal} icon={<PlusOutlined />} />
          </Space>
        </Col>
      </Row>
      <br />
      <PipelineTable onHistory={showHistory} />
      <Modal
        title={t("add_pipeline")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer="#pipeline-gathering"
        width={1500}
        destroyOnClose
        footer={null}
      >
        <Pipeline initialItems={DEFAULT_INITAL_PIPELINE} initialAction={data} />
      </Modal>
      <Modal
        title={t("pipeline_history")}
        open={isHistoryOpen}
        onCancel={handleCancelHistory}
        getContainer="#pipeline-gathering"
        width={1300}
        footer={null}
      >
        <PipelineHistory />
      </Modal>
    </div>
  );

  function showModal() {
    setIsModalOpen(true);
  }

  function handleOk() {
    setIsModalOpen(false);
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  function showHistory() {
    setIsHistoryOpen(true);
  }

  function handleCancelHistory() {
    setIsHistoryOpen(false);
  }
};
