import axios from "axios";
import {
  SET_LOADING,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
} from "./types";

const setLoading = () => {
  return { type: SET_LOADING };
};

export const getLatestStats = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/api/stats/latest")
    .then((res) => dispatch({ type: GET_LATEST_STATS, payload: res.data }));
};

export const getCountryStats = (country) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(`/api/stats/country/${country}`)
    .then((res) => dispatch({ type: GET_COUNTRY_STATS, payload: res.data }));
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
