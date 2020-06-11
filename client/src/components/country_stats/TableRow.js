import React from "react";

const TableRow = ({ stats }) => {
  const { date, confirmed, recovered, deaths } = stats;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-CA");
  };
  return (
    <div className="table-body-row">
      <div className="table-body-row-item">{formatDate(date)}</div>
      <div className="table-body-row-item">{confirmed.toLocaleString()}</div>
      <div className="table-body-row-item">{recovered.toLocaleString()}</div>
      <div className="table-body-row-item">{deaths.toLocaleString()}</div>
    </div>
  );
};

export default TableRow;
