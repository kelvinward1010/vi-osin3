import React from "react";
import { Pie, PieConfig } from "@ant-design/plots";

export const PieChart: React.FC = () => {
  const data = [
    {
      type: "Enable",
      value: 27,
    },
    {
      type: "Disable",
      value: 25,
    },
  ];

  const arrTotal: any = [];

  data.forEach((item: any) => {
    var total = 0;
    total += item?.value;
    return arrTotal.push(total);
  });
  function simpleArraySum(ar: any) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
      if (typeof ar[i] == `number`) sum += ar[i];
    }
    return sum;
  }

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: `Total ${simpleArraySum(arrTotal)}`,
      },
    },
    legend: {
      layout: "horizontal",
      position: "bottom",
    },
  };
  return <Pie {...config} />;
};
