import { CHANGE_AUTH_STATE } from "../types";

export const handleAuthState = (status) => {
  return {
    type: CHANGE_AUTH_STATE,
    payload: status,
  };
};
