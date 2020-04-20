import { combineReducers } from "redux";
import { CHANGE_AUTH_STATE } from "../types";

const authState = (state = null, action) => {
  if (action.type === CHANGE_AUTH_STATE) return action.payload;
  return state;
};

export default combineReducers({
  authState,
});
