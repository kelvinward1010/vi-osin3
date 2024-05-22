import { CloseOutlined, DownOutlined, RightOutlined, ToolOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import classNames from "classnames";
import React, { forwardRef, HTMLAttributes } from "react";
import { PIPELINE_ACTION_ICON } from "./pipeline.constants";
import styles from "./pipeline-tree.module.less";

export interface Props extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
  childCount?: number;
  clone?: boolean;
  collapsed?: boolean;
  depth: number;
  disableInteraction?: boolean;
  disableSelection?: boolean;
  ghost?: boolean;
  handleProps?: any;
  indicator?: boolean;
  indentationWidth: number;
  data?: Record<string, any>;
  onCollapse?(): void;
  onSetting?(): void;
  onRemove?(): void;
  wrapperRef?(node: HTMLLIElement): void;
}

export const PipelineTreeItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      childCount,
      clone,
      depth,
      disableSelection,
      disableInteraction,
      ghost,
      handleProps,
      indentationWidth,
      indicator,
      collapsed,
      onCollapse,
      onRemove,
      onSetting,
      style,
      data,
      wrapperRef,
      ...props
    },
    ref,
  ) => {
    return (
      <li
        className={classNames(
          styles.wrapper,
          styles.indicator,
          clone && styles.clone,
          ghost && styles.ghost,
          disableSelection && styles.disableSelection,
          disableInteraction && styles.disableInteraction,
        )}
        ref={wrapperRef}
        style={
          {
            "--spacing": `${indentationWidth * depth}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        <Row className={styles.treeItem} ref={ref} style={style} align="middle" wrap={false}>
          <Col flex="0 0 40px" className={styles.icon}>
            {PIPELINE_ACTION_ICON[data?.name ?? "default"]}
          </Col>
          {onCollapse && (
            <Col flex="0 0 40px" className={styles.collapsed} onClick={onCollapse}>
              {collapsed ? <RightOutlined /> : <DownOutlined />}
            </Col>
          )}
          <Col className={styles.text} flex="1 1 auto" {...handleProps} title={data?.readme}>
            {data?.display_name}
          </Col>
          {!clone && onSetting && (
            <Col flex="0 0 40px" className={styles.collapsed}>
              <ToolOutlined onClick={onSetting} />
            </Col>
          )}
          {!clone && onRemove && (
            <Col flex="0 0 40px" className={styles.collapsed}>
              <CloseOutlined onClick={onRemove} />
            </Col>
          )}
          {clone && childCount && childCount > 1 && (
            <span className={styles.Count}>{childCount}</span>
          )}
        </Row>
      </li>
    );
  },
);
