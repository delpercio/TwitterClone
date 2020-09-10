import api from "../../utils/api";
export const LIKE_POST = "LIKE_POST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCESS";
export const UNLIKE_POST = "UNLIKE_POST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const FAILED = "FAILED";

export const likeMessageAction = (messageId) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_POST });
    console.log('this is the line before the api call here is the ID -->',messageId)
    const payload = await api.likeMessage(messageId)
    dispatch({ type: LIKE_POST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: err.message,
    });
  }
};

export const UnlikeMessageAction = (likeId) => async (dispatch, getState) => {
  try {
    dispatch({ type: UNLIKE_POST });
    const payload = await api.unLikeMessage(likeId)
    dispatch({ type: UNLIKE_POST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: err.message,
    });
  }
};

