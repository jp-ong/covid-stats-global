import {
  SET_LOADING,
  GET_LATEST_STATS,
  GET_COUNTRY_STATS,
  SORT_GLOBAL_STATS,
  SORT_COUNTRY_STATS,
  CHANGE_ORDER,
} from "../actions/types";

const initialState = {
  latest_stats: [],
  country_stats: [],
  is_ascending: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CHANGE_ORDER:
      return { ...state, is_ascending: !state.is_ascending };
    case GET_LATEST_STATS:
      return { ...state, latest_stats: action.payload, loading: false };
    case GET_COUNTRY_STATS:
      return { ...state, country_stats: action.payload, loading: false };
    case SORT_GLOBAL_STATS:
      return { ...state, latest_stats: action.payload };
    case SORT_COUNTRY_STATS:
      return { ...state, country_stats: action.payload };
    default:
      return state;
  }
};
