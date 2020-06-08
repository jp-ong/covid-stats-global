import axios from "axios";
import { SET_LOADING, GET_LATEST_STATS, GET_COUNTRY_STATs } from "./types";

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
    .then((res) => dispatch({ type: GET_COUNTRY_STATs, payload: res.data }));
};
