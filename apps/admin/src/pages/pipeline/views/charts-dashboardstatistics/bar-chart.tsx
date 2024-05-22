import React from "react";
import { Bar, BarConfig } from "@ant-design/plots";

const data = [
  {
    type: "vnexpress.net 1",
    sales: 38,
  },
  {
    type: "vnexpress.net 2",
    sales: 52,
  },
  {
    type: "vnexpress.net 3",
    sales: 61,
  },
  {
    type: "vnexpress.net 4",
    sales: 14,
  },
  {
    type: "vnexpress.net 5",
    sales: 48,
  },
  {
    type: "vnexpress.net 6",
    sales: 38,
  },
  {
    type: "vnexpress.net 7",
    sales: 38,
  },
  {
    type: "vnexpress.net 8",
    sales: 38,
  },
];

export const BarChart: React.FC = () => {
  //const [data, setData] = useState([]);
  const arrMaxValue: any = [];

  data.forEach((item: any) => {
    var total = 0;
    total += item?.sales;
    return arrMaxValue.push(Number(total));
  });

  console.log(arrMaxValue);

  const valueMax = Math.max(...arrMaxValue);

  console.log(valueMax);

  const config: BarConfig = {
    data,
    xField: "sales",
    yField: "type",
    seriesField: "sales",
    color: ({ sales }) => {
      return sales === valueMax ? "l(180) 0:#0184FD 1:#FF008A" : "l(180) 0:#006EF8 1:#69ACFF";
    },
    legend: false,
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
    width: 450,
    height: 500,
  };

  return <Bar {...config} />;
};
