import React from "react";
import { data7daysdown } from "./datafake";

export const Down: React.FC = () => {
  return (
    <>
      {data7daysdown.map((item, idx) => (
        <li key={idx}>
          <span>{item.name}</span>
          <span>{item.total} tin</span>
          <span>{item.status}</span>
          <span>{item.number} %</span>
        </li>
      ))}
    </>
  );
};
