// TODO: implement
import {
  LOADING,
  LOADING_MESSAGES_SUCCESS,
  LOADING_MESSAGES_FAILED,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILED,
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
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...INITIAL_STATE,
        loader: "",
        loading: false,
        messages: messages,
      };
    case DELETE_MESSAGE_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
