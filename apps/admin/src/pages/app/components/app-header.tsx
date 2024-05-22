import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { homePath } from "@/pages/router";
import { NAVBAR_HEADER } from "../app.constants";
import styles from "./app-header.module.less";

export const AppHeader: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "app" });

  return (
    <Row className={styles.header} align="middle">
      <Col span={4}>
        <Link to={homePath}>
          <img className={styles.logo} src="/logo-header.jpg" alt="Logo" width={200} height={30} />
        </Link>
      </Col>
      <Col span={16} className={styles.navbar}>
        <Row justify="space-between" align="middle">
          {NAVBAR_HEADER.map(({ title, to, icon }) => (
            <Col key={to}>
              <NavLink
                to={to}
                title={t(title)}
                className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
              >
                {icon}
              </NavLink>
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={4}>
        <Row justify="end" className={styles.userSetting}>
          <BellOutlined className={styles.icon} />
          <UserOutlined className={styles.icon} />
        </Row>
      </Col>
    </Row>
  );
};
