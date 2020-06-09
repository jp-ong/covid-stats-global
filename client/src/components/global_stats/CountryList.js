import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CountryRow from "./CountryRow";
import Spinner from "../../assets/img/spinner.svg";
import { getLatestStats } from "../../redux/actions/statActions";

export class CountryList extends Component {
  static propTypes = {
    stat: PropTypes.object.isRequired,
    getLatestStats: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLatestStats();
  }

  render() {
    const { latest_stats, loading } = this.props.stat;
    return (
      <div className="container">
        <div className="list">
          <div className="list-header">
            <div className="list-header-item">
              <button>Country</button>
            </div>
            <div className="list-header-item">
              <button>Population</button>
            </div>
            <div className="list-header-item">
              <button>Confirmed</button>
            </div>
            <div className="list-header-item">
              <button>Recovered</button>
            </div>
            <div className="list-header-item">
              <button>Deaths</button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
