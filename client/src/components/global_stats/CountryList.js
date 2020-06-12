import React, { Component } from "react";

import CountryRow from "./CountryRow";
import Spinner from "../../assets/img/spinner.svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getLatestStats,
  sortGlobalStats,
  setLatestDay,
} from "../../redux/actions/statActions";

export class CountryList extends Component {
  static propTypes = {
    stat: PropTypes.object.isRequired,
    getLatestStats: PropTypes.func.isRequired,
    sortGlobalStats: PropTypes.func.isRequired,
    setLatestDay: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLatestStats();
  }

  sortList = (field) => {
    this.props.sortGlobalStats(field);
  };

  changeLatestDay = (value) => {
    this.props.setLatestDay(value);
    this.props.getLatestStats();
  };

  render() {
    const { latest_stats, loading, latest_date } = this.props.stat;
    const currentDate = (days) =>
      new Date(
        new Date(new Date().setDate(new Date().getDate() - days)).setUTCHours(
          0,
          0,
          0,
          0
        )
      );
    return (
      <div className="container">
        <div className="container-controls">
          <button
            className={loading ? "disabled" : ""}
            onClick={() => this.changeLatestDay(1)}
          >
            -
          </button>
          <div className="container-controls-data">
            {currentDate(latest_date).toLocaleDateString("en-CA")}
          </div>
          <button
            className={loading ? "disabled" : ""}
            onClick={() => {
              if (latest_date > 1) this.changeLatestDay(-1);
            }}
          >
            +
          </button>
        </div>
        <div className="list">
          <div className="list-header">
            <div className="list-header-item">
              <button onClick={() => this.sortList("country")}>Country</button>
            </div>
            <div className="list-header-item">
              <button onClick={() => this.sortList("population")}>
                Population
              </button>
            </div>
            <div className="list-header-item">
              <button onClick={() => this.sortList("confirmed")}>
                Confirmed
              </button>
            </div>
            <div className="list-header-item">
              <button onClick={() => this.sortList("recovered")}>
                Recovered
              </button>
            </div>
            <div className="list-header-item">
              <button onClick={() => this.sortList("deaths")}>Deaths</button>
            </div>
            <div className="list-header-item">
              <button>&nbsp;</button>
            </div>
          </div>
          <div className="list-body">
            {loading ? (
              <div className="container-feedback">
                Fetching Data <img src={Spinner} alt="Loading" />
              </div>
            ) : latest_stats.length === 0 ? (
              <div className="container-feedback">
                No data available for this day
              </div>
            ) : (
              latest_stats.map((stats) => (
                <CountryRow key={stats.country} stats={stats} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stat: state.stats,
});

const mapDispatchToProps = {
  getLatestStats,
  sortGlobalStats,
  setLatestDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
