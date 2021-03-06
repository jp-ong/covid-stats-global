import {
  SET_LOADING,
  SET_LATEST_DATE,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
  CALC_STATS_DIFF,
  CALC_STATS_TOTAL,
} from "../actions/types";

const initialState = {
  latest_stats: [],
  country_stats: [],
  loading: false,
  latest_date: 1,
  stats_diff: {
    new_confirmed: "",
    new_recovered: "",
    new_deaths: "",
  },
  stats_total: {
    total_confirmed: "",
    total_recovered: "",
    total_deaths: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_LATEST_DATE:
      return { ...state, latest_date: action.payload };
    case GET_LATEST_STATS:
      return { ...state, latest_stats: action.payload, loading: false };
    case GET_COUNTRY_STATS:
      return { ...state, country_stats: action.payload, loading: false };
    case SORT_GLOBAL_STATS:
      return { ...state, latest_stats: action.payload };
    case CALC_STATS_DIFF:
      return { ...state, stats_diff: action.payload };
    case CALC_STATS_TOTAL:
      return { ...state, stats_total: action.payload };
    default:
      return state;
  }
};
