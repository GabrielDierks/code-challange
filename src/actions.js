import { RESET_MESSAGE, CHANGE_MESSAGE } from "./types";

export const resetMessage = () => {
  return {
    type: RESET_MESSAGE
  };
};
export const changeMessage = message => {
  return {
    type: CHANGE_MESSAGE,
    payload: message
  };
};
