// TODO: implement
import {
  LIKE_POST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST,
  UNLIKE_POST_SUCCESS,
  FAILED,
} from "../actions/likes";

// Initial State
const INITIAL_STATE = {
  messageId: "",
  error: "",
  loading: false,
};

export const likesReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case LIKE_POST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case LIKE_POST_SUCCESS:
      const { messageId } = action.payload;
      return {
        ...INITIAL_STATE,
        messageId: messageId,
        loading: false,
      };
    case UNLIKE_POST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case UNLIKE_POST_SUCCESS:
      const { likesId } = action.payload;
      return {
        ...INITIAL_STATE,
        likesId: likesId,
        loading: false,
      };
    case FAILED:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
