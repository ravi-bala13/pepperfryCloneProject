import { SET_ISLOADING, SET_USERID, SET_USERNAME } from "./actionTypes";

const initState = {
  userId: null,
  username: null,
  isLoading: false,
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
        username: payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
