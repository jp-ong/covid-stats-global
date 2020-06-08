import React from "react";

const TableRow = ({ stats }) => {
  const { date, confirmed, recovered, deaths } = stats;
  return (
    <div>
      <div>{date}</div>
      <div>{confirmed}</div>
      <div>{recovered}</div>
      <div>{deaths}</div>
    </div>
  );
};

export default TableRow;
