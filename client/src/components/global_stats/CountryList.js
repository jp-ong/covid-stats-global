import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CountryRow from "./CountryRow";
import Spinner from "../../assets/img/spinner.svg";
import {
  getLatestStats,
  sortGlobalStats,
} from "../../redux/actions/statActions";

export class CountryList extends Component {
  static propTypes = {
    stat: PropTypes.object.isRequired,
    getLatestStats: PropTypes.func.isRequired,
    sortGlobalStats: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getLatestStats();
  }

  sortList = (field) => {
    this.props.sortGlobalStats(field);
  };

  render() {
    const { latest_stats, loading } = this.props.stat;
    return (
      <div className="container">
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
