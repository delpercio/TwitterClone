// TODO: implement
import {
  LOADING,
  LOADING_MESSAGES_SUCCESS,
  LOADING_MESSAGES_FAILED,
} from "../actions";

// Initial State
const INITIAL_STATE = {
  messages: [],
  loading: false,
  error: "",
};

export const messagesReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };
    case LOADING_MESSAGES_SUCCESS:
      const { messages } = action.payload;
      return {
        ...INITIAL_STATE,
        loader: "",
        loading: false,
        messages: messages,
      };
    case LOADING_MESSAGES_FAILED:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
