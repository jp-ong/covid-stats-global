import React, { Component } from "react";
import { Link } from "react-router-dom";

import TableRow from "./TableRow";
import Spinner from "../../assets/img/spinner.svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCountryStats } from "../../redux/actions/statActions";

export class TableList extends Component {
  static propTypes = {
    stat: PropTypes.object.isRequired,
    getCountryStats: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCountryStats(this.props.match.params.country);
  }

  render() {
    const { country_stats, loading, stats_diff } = this.props.stat;
    const { country, population } =
      country_stats["0"] === undefined
        ? { country: "", population: "" }
        : country_stats["0"];
    const { newConfirmed, newRecovered, newDeaths } =
      stats_diff === undefined
        ? { newConfirmed: "", newRecovered: "", newDeaths: "" }
        : stats_diff;
    return (
      <div className="container">
        <div className="container-header">
          <div className="container-header-item">
            <div className="container-header-item-label">Country</div>
            <div className="container-header-item-data">{country}</div>
          </div>
          <div className="container-header-item">
            <div className="container-header-item-label">Population</div>
            <div className="container-header-item-data">
              {population.toLocaleString()}
            </div>
          </div>
          <div className="container-header-item">
            <div className="container-header-item-label">+Confirmed</div>
            <div className="container-header-item-data">{newConfirmed}</div>
          </div>
          <div className="container-header-item">
            <div className="container-header-item-label">+Recovered</div>
            <div className="container-header-item-data">{newRecovered}</div>
          </div>
          <div className="container-header-item">
            <div className="container-header-item-label">+Deaths</div>
            <div className="container-header-item-data">{newDeaths}</div>
          </div>
        </div>
        <div className="table">
          <div className="table-header">
            <div className="table-header-item">
              <div>Date</div>
            </div>
            <div className="table-header-item">
              <div>Confirmed</div>
            </div>
            <div className="table-header-item">
              <div>Recovered</div>
            </div>
            <div className="table-header-item">
              <div>Deaths</div>
            </div>
          </div>
          <div className="table-body">
            {loading ? (
              <div className="container-feedback">
                Fetching Data <img src={Spinner} alt="Loading" />
              </div>
            ) : (
              country_stats.map((stats) => (
                <TableRow key={stats._id} stats={stats} />
              ))
            )}
          </div>
        </div>
        <div className="container-footer">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stat: state.stats,
});

const mapDispatchToProps = {
  getCountryStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
