import React, { useState } from "react";
import { Area, AreaConfig } from "@ant-design/plots";

const data = [
  {
    Day: "22/06/2022",
    value: 4,
  },
  {
    Day: "23/06/2022",
    value: 6,
  },
  {
    Day: "24/06/2022",
    value: 9,
  },
  {
    Day: "25/06/2022",
    value: 15,
  },
  {
    Day: "26/06/2022",
    value: 11,
  },
  {
    Day: "27/06/2022",
    value: 8,
  },
  {
    Day: "28/06/2022",
    value: 12,
  },
];

export const AreaChart: React.FC = () => {
  //const [data, setData] = useState([]);

  const config: AreaConfig = {
    data,
    xField: "Day",
    yField: "value",
    xAxis: {
      range: [0, 1],
      grid: { line: { style: { stroke: "#aaa" } } },
      line: { style: { stroke: "red" } },
    },
    label: {
      position: "middle",
      style: {
        fill: "red",
      },
    },
    yAxis: {
      nice: true,
      line: { style: { stroke: "black" } },
    },
    line: {
      color: "red",
    },
    color: "l(90) 0:#49A8FF 0.8:#FF008A 1:#FF008A",
    width: 450,
    height: 300,
  };

  return (
    <>
      <Area {...config} />
    </>
  );
};
