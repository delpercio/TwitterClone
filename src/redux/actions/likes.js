import api from "../../utils/api";
export const LIKE_POST = "LIKE_POST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCESS";
export const UNLIKE_POST = "UNLIKE_POST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const FAILED = "FAILED";

export const likeMessage = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_POST });
    const payload = await api.likeMessge()
    dispatch({ type: LIKE_POST_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: err.message,
    });
  }
};

export const likeMessage