// TODO: implement
import {LIKE_POST,LIKE_POST_SUCCESS,UNLIKE_POST,UNLIKE_POST_SUCCESS,FAILED} from '../actions/likes'

  // Initial State
  const INITIAL_STATE = {
    messageId: '',
    error: "",
  };
  
  export const likesReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LIKE_POST_SUCCESS:
        const { messageId } = action.payload;
        return {
          ...INITIAL_STATE,
          messageId: messageId,
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
  