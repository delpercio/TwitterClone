// // TODO: implement
// import { GET_USERS } from "../actions";

// // INITIAL STATE
// const INITIAL_STATE = {
//   users:[]
// };

// const getUsersReducer = (state = { ...INITIAL_STATE }, action) => {
//   switch (action.type) {
//     case GET_USERS:
//         const usersList = async () => {
//             const users = await api.getUsers();
//             const usersArr = users.users;
//           };
//       return {
//         ...INITIAL_STATE,users: usersArr
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...INITIAL_STATE,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default getUsersReducer;


