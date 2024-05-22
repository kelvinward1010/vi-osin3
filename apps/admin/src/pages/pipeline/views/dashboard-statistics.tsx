import classNames from "classnames";
import React, { useState } from "react";
import { CaretUpOutlined, RiseOutlined } from "@ant-design/icons";
import { AreaChart } from "./charts-dashboardstatistics/area-chart";
import { BarChart } from "./charts-dashboardstatistics/bar-chart";
import styles from "./dashboard-statistics.module.less";
import { PieChart } from "./charts-dashboardstatistics/pie-chart";
import { Col, Radio, RadioChangeEvent, Row, Tabs } from "antd";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { data7days } from "./others/datafake";
import { All } from "./others/All";
import { Up } from "./others/Up";
import { Down } from "./others/Down";

const optionsMenu = [
  { label: "Tất cả", key: "1", children: <All /> },
  { label: "Tăng", key: "2", children: <Up /> },
  { label: "Giảm", key: "3", children: <Down /> },
];

export const DashboardStatistics: React.FC = () => {
  return (
    <div className={classNames(styles.dashboardstatistics)}>
      <Row>
        <Col span={6}>
          <div className={classNames(styles.dashboardstatisticsLeft)}>
            <div className={classNames(styles.dashboardstatisticsLeftone)}>
              <div className={styles.dashboardstatisticsLeftoneLeft}>
                <p>tổng lượng dữ liệu</p>
                <h6>THEO PIPELINE</h6>
                <span>100000</span>
              </div>
              <div className={classNames(styles.dashboardstatisticsLeftoneRight)}>
                <div className={styles.dashboardstatisticsLeftoneRightone}>
                  <RiseOutlined
                    style={{
                      color: "green",
                      fontSize: "35px",
                    }}
                  />
                </div>
                <div className={styles.dashboardstatisticsLeftoneRighttwo}>
                  <p>tuần trước</p>
                  <CaretUpOutlined
                    style={{
                      color: "green",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={classNames(styles.dashboardstatisticsLefttwo)}>
              <p>TỔNG SỐ PIPELINE</p>
              <div className={styles.spaceBlack} />
              <div className={styles.pieChartStatistics}>
                <PieChart />
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={classNames(styles.dashboardstatisticsMiddle)}>
            <div className={styles.dashboardstatisticsMiddleone}>
              <p>LƯỢNG DỮ LIỆU TRONG 7 NGÀY GẦN NHẤT</p>
              <AreaChart />
            </div>
            <div className={styles.dashboardstatisticsMiddletwo}>
              <p>TỔNG DỮ LIỆU TRONG 7 NGÀY THEO PIPELINE</p>
              <BarChart />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={classNames(styles.dashboardstatisticsRight)}>
            <p>DANH SÁCH TỔNG DỮ LIỆU TRONG 7 NGÀY</p>
            <div className={styles.dashboardstatisticsRightmenu}>
              <Tabs
                defaultActiveKey="1"
                items={optionsMenu}
                style={{
                  background: "white",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
