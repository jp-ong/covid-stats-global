import React from "react";
import { Link } from "react-router-dom";

const CountryRow = ({ stats }) => {
  const { country, population, confirmed, recovered, deaths } = stats;
  return (
    <div className="list-body-row">
      <div className="list-body-row-content">{country}</div>
      <div className="list-body-row-content">{population}</div>
      <div className="list-body-row-content">{confirmed}</div>
      <div className="list-body-row-content">{recovered}</div>
      <div className="list-body-row-content">{deaths}</div>
      <div className="list-body-row-content">
        <Link to={`/country/${country}`}>View</Link>
      </div>
    </div>
  );
};

export default CountryRow;
