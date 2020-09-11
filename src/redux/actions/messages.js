import api from "../../utils/api";

// MESSAGES CONSTANTS
export const LOADING = "LOADING";
export const LOADING_MESSAGES_SUCCESS = "LOADING_MESSAGES_SUCCESS";
export const LOADING_MESSAGES_FAILED = "LOADING_MESSAGES_FAILED";

const getMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING });
    const payload = await api.getMessages();
    dispatch({ type: LOADING_MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOADING_MESSAGES_FAILED,
      payload: err.message,
    });
  }
};

export const actions = {
  getMessages,
};
