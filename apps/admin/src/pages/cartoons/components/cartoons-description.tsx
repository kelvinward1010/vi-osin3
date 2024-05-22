import { Descriptions, Image, Spin } from "antd";
import React from "react";
import type { ICartoon2D } from "@/services/cartoons.types";

interface Cartoons2dDescriptionProps {
  cartoon?: ICartoon2D;
  isLoading: boolean;
}

export const Cartoons2dDescription: React.FC<Cartoons2dDescriptionProps> = ({
  cartoon,
  isLoading,
}) => {
  return (
    <Spin spinning={isLoading}>
      <Descriptions title="Cartoon Info">
        <Descriptions.Item label="Title">{cartoon?.title}</Descriptions.Item>
        <Descriptions.Item label="Creator">
          {Array.isArray(cartoon?.creator) ? cartoon?.creator.join(", ") : cartoon?.creator}
        </Descriptions.Item>
        <Descriptions.Item label="Rating">{cartoon?.rating}</Descriptions.Item>
        <Descriptions.Item label="Image">
          <Image src={cartoon?.image} alt={cartoon?.title} width={200} />
        </Descriptions.Item>
      </Descriptions>
    </Spin>
  );
};
