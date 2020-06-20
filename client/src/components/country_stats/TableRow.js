import React from "react";

const TableRow = ({ stats, prev }) => {
  const { date, confirmed, recovered, deaths } = stats;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-CA");
  };
  return (
    <div className="table-body-row">
      <div className="table-body-row-item">{formatDate(date)}</div>
      <div className="table-body-row-item">
        {confirmed.toLocaleString()}
        <div className="table-body-row-item-info">
          (+
          {prev === undefined
            ? 0
            : (confirmed - prev.confirmed).toLocaleString()}
          )
        </div>
      </div>
      <div className="table-body-row-item">
        {recovered.toLocaleString()}
        <div className="table-body-row-item-info">
          (+
          {prev === undefined
            ? 0
            : (recovered - prev.recovered).toLocaleString()}
          )
        </div>
      </div>
      <div className="table-body-row-item">
        {deaths.toLocaleString()}
        <div className="table-body-row-item-info">
          (+{prev === undefined ? 0 : (deaths - prev.deaths).toLocaleString()})
        </div>
      </div>
    </div>
  );
};

export default TableRow;
