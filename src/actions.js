import { RESET_MESSAGE, CHANGE_MESSAGE } from "./types";

export const resetMessage = (input, message, clear) => {
  return {
    type: RESET_MESSAGE,
    payload: { input, message, clear }
  };
};
export const changeMessage = (message, clear) => {
  return {
    type: CHANGE_MESSAGE,
    payload: { message, clear }
  };
};
