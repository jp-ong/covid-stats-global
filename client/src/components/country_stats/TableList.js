import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TableRow from "./TableRow";
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
        {loading ? (
          <div className="container-feedback">Fetching Data</div>
        ) : (
          country_stats.map((stats) => (
            <TableRow key={stats._id} stats={stats} />
          ))
        )}
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
