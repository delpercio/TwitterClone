// import { combineReducers } from "redux";
// import { authReducer } from "./auth";

// export default combineReducers({ auth: authReducer });
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});
