import { Image, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { getCartoons2DDetailUrl } from "@/pages/router";
import { ICartoon2D } from "@/services/cartoons.types";
import type { ColumnsType } from "antd/lib/table";

interface CartoonsTableProps {
  cartoons?: ICartoon2D[];
  isLoading: boolean;
}

export const Cartoons2DTable: React.FC<CartoonsTableProps> = ({ cartoons, isLoading }) => {
  const columns: ColumnsType<ICartoon2D> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => <Link to={getCartoons2DDetailUrl(record.id)}>{text}</Link>,
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "RuntimeInMinutes",
      dataIndex: "runtime_in_minutes",
      key: "runtime_in_minutes",
    },
    {
      title: "Episodes",
      dataIndex: "episodes",
      key: "episodes",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img, record) => <Image src={img} alt={record.title} width={50} />,
    },
  ];

  return <Table columns={columns} dataSource={cartoons} loading={isLoading} rowKey="id" />;
};
