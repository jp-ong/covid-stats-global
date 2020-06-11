import React, { Component } from "react";

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
    const { country_stats, loading } = this.props.stat;
    return (
      <div className="container">
        <div className="table">
          <div className="table-header">
            <div className="table-header-item">
              <button>Date</button>
            </div>
            <div className="table-header-item">
              <button>Confirmed</button>
            </div>
            <div className="table-header-item">
              <button>Recovered</button>
            </div>
            <div className="table-header-item">
              <button>Deaths</button>
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
