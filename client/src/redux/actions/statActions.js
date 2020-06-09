import axios from "axios";
import {
  SET_LOADING,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
  SORT_COUNTRY_STATS,
  CHANGE_ORDER,
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
  const { latest_stats, is_ascending } = getState().stats;
  const sorted_stats =
    field === "country"
      ? latest_stats.sort((a, b) => {
          return is_ascending
            ? a[field].localeCompare(b[field])
            : b[field].localeCompare(a[field]);
        })
      : latest_stats.sort((a, b) => {
          return is_ascending ? a[field] - b[field] : b[field] - a[field];
        });
  dispatch({ type: CHANGE_ORDER });
  dispatch({ type: SORT_GLOBAL_STATS, payload: sorted_stats });
};
