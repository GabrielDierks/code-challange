import { RESET_MESSAGE, CHANGE_MESSAGE } from "./types";

const initialState = { message: "They called the Enterprise a garbage scow!" };

const rootReducer = function(state, action) {
  switch (action.type) {
    case RESET_MESSAGE:
      return {
        ...state,
        message: ""
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return initialState;
  }
};

export default rootReducer;
