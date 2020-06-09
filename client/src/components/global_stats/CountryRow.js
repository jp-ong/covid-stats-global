import React from "react";
import { Link } from "react-router-dom";

const CountryRow = ({ stats }) => {
  const { country, population, confirmed, recovered, deaths } = stats;
  return (
    <div className="list-body-row">
      <div className="list-body-row-item">{country}</div>
      <div className="list-body-row-item">
        <div className="list-body-row-item-label">Population</div>
        {parseInt(population).toLocaleString()}
      </div>
      <div className="list-body-row-item">
        <div className="list-body-row-item-label">Confirmed</div>
        {confirmed.toLocaleString()}
      </div>
      <div className="list-body-row-item">
        <div className="list-body-row-item-label">Recovered</div>
        {recovered.toLocaleString()}
      </div>
      <div className="list-body-row-item">
        <div className="list-body-row-item-label">Deaths</div>
        {deaths.toLocaleString()}
      </div>
      <div className="list-body-row-item">
        <Link to={`/country/${country}`}>&raquo;</Link>
      </div>
    </div>
  );
};

export default CountryRow;
