import axios from "axios";
import {
  SET_LOADING,
  SET_LATEST_DATE,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
  CALC_STATS_DIFF,
  CALC_STATS_TOTAL,
} from "./types";

const setLoading = () => {
  return { type: SET_LOADING };
};

export const setLatestDay = (value) => (dispatch, getState) => {
  const { latest_date } = getState().stats;
  dispatch({ type: SET_LATEST_DATE, payload: latest_date + value });
};

const calcTotal = (data) => {
  const latest_stats = data;
  const payload = {
    total_confirmed: latest_stats.reduce((total, data) => {
      return total + data["confirmed"];
    }, 0),
    total_recovered: latest_stats.reduce((total, { recovered }) => {
      return total + recovered;
    }, 0),
    total_deaths: latest_stats.reduce((total, { deaths }) => {
      return total + deaths;
    }, 0),
  };
  return { type: CALC_STATS_TOTAL, payload };
};

export const getLatestStats = () => (dispatch, getState) => {
  dispatch(setLoading());
  const { latest_date } = getState().stats;
  axios.get(`/api/stats/latest/${latest_date}`).then((res) => {
    dispatch({ type: GET_LATEST_STATS, payload: res.data });
    dispatch(calcTotal(res.data));
  });
};

const calcDiff = (data) => {
  const country_stats = data;
  const a = country_stats[0];
  const b = country_stats[1];
  const payload = {
    new_confirmed: a.confirmed - b.confirmed,
    new_recovered: a.recovered - b.recovered,
    new_deaths: a.deaths - b.deaths,
  };
  return { type: CALC_STATS_DIFF, payload };
};

export const getCountryStats = (country) => (dispatch) => {
  dispatch(setLoading());
  axios.get(`/api/stats/country/${country}`).then((res) => {
    dispatch({ type: GET_COUNTRY_STATS, payload: res.data });
    dispatch(calcDiff(res.data));
  });
};

export const sortGlobalStats = (field) => (dispatch, getState) => {
  const { latest_stats } = getState().stats;

  const sorted_stats = latest_stats.sort((a, b) => {
    return field === "country"
      ? a[field].localeCompare(b[field])
      : b[field] - a[field];
  });

  dispatch({ type: SORT_GLOBAL_STATS, payload: sorted_stats });
};
