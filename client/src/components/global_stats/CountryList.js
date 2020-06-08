import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CountryRow from "./CountryRow";
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
            <div className="list-headers">Country</div>
            <div className="list-headers">Population</div>
            <div className="list-headers">Confirmed</div>
            <div className="list-headers">Recovered</div>
            <div className="list-headers">Deaths</div>
          </div>
          <div className="list-body">
            {loading ? (
              <div className="container-feedback">Fetching Data</div>
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
