import React from "react";
import { data7days } from "./datafake";

export const All: React.FC = () => {
  return (
    <>
      {data7days.map((item, idx) => (
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
