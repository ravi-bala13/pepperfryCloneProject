import { SET_USERID, SET_USERNAME } from "./actionTypes";

const initState = {
  userId: null,
  userName: null,
};

export const reducer = (state = initState, { type, payload }) => {
  console.log("type, payload :", type, payload);
  switch (type) {
    case SET_USERID:
      return {
        ...state,
        userId: payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        userName: payload,
      };
    default:
      return state;
  }
};
