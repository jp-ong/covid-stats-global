import { combineReducers } from "redux";
import statReducer from "./statReducer";

export default combineReducers({ stats: statReducer });
