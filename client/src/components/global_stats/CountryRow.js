import React from "react";
import { Link } from "react-router-dom";

const CountryRow = ({ stats }) => {
  const { country, population, confirmed, recovered, deaths } = stats;
  return (
    <div className="list-body-row">
      <div className="list-body-row-item">{country}</div>
      <div className="list-body-row-item">
        {parseInt(population).toLocaleString()}
      </div>
      <div className="list-body-row-item">{confirmed.toLocaleString()}</div>
      <div className="list-body-row-item">{recovered.toLocaleString()}</div>
      <div className="list-body-row-item">{deaths.toLocaleString()}</div>
      <div className="list-body-row-item">
        <Link to={`/country/${country}`}>&raquo;</Link>
      </div>
    </div>
  );
};

export default CountryRow;
