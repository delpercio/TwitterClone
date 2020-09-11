import api from "../../utils/api";
import { actions } from "./messages";
export const LIKE_POST = "LIKE_POST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCESS";
export const UNLIKE_POST = "UNLIKE_POST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const FAILED = "FAILED";

export const _likeMessageAction = (messageId) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_POST });
    const payload = await api.likeMessage(messageId);
    dispatch({ type: LIKE_POST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: err.message,
    });
  }
};  

export const likeMessageAction = (messageId) => async (dispatch, getState) => {
  return dispatch(_likeMessageAction(messageId)).then(()=> {return dispatch(actions.getMessages())});
};

export const _unlikeMessageAction = (likeId) => async (dispatch, getState) => {
  try {
    dispatch({ type: UNLIKE_POST });
    const payload = await api.unlikeMessage(likeId);
    dispatch({ type: UNLIKE_POST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: err.message,
    });
  }
};

export const unlikeMessageAction = (likeId) => async (dispatch, getState) => {
  return dispatch(_unlikeMessageAction(likeId)).then(()=> {return dispatch(actions.getMessages())});
};

