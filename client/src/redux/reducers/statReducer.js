import {
  SET_LOADING,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
} from "../actions/types";

const initialState = {
  latest_stats: [],
  country_stats: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_LATEST_STATS:
      return { ...state, latest_stats: action.payload, loading: false };
    case GET_COUNTRY_STATS:
      return { ...state, country_stats: action.payload, loading: false };
    case SORT_GLOBAL_STATS:
      return { ...state, latest_stats: action.payload };
    default:
      return state;
  }
};
