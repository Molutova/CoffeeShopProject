import {
  INCREMENT,
  DECREMENT,
  MULTY,
  DIVIDE,
  CHANGE_LANGUAGE,
  CHANGE_AGE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.Nailya };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case MULTY:
      return { ...state, count: state.count * action.payload };
    case DIVIDE:
      return { ...state, count: state.count / action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, lg: action.payload };
    case CHANGE_AGE:
      return { ...state, myAge: action.payload };
    default:
      throw new Error();
  }
};
