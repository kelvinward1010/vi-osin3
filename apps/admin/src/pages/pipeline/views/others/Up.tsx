import React from "react";
import { data7daysup } from "./datafake";

export const Up: React.FC = () => {
  return (
    <>
      {data7daysup.map((item, idx) => (
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
