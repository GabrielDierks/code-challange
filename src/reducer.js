import { RESET_MESSAGE, CHANGE_MESSAGE } from "./types";

const initialState = { message: "", input: "blue", clear: true };

const rootReducer = function(state, action) {
  switch (action.type) {
    case RESET_MESSAGE:
      return {
        ...state,
        input: action.payload.message,
        message: "",
        clear: true
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        clear: false
      };
    default:
      return initialState;
  }
};

export default rootReducer;
