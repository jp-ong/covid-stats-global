import {
  SET_LOADING,
  GET_LATEST_STATS,
  GET_COUNTRY_STATs,
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
    case GET_COUNTRY_STATs:
      return { ...state, country_stats: action.payload, loading: false };
    default:
      return state;
  }
};
