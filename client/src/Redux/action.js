import { SET_USERID, SET_USERNAME } from "./actionTypes";

export const setUserId = (data) => ({
  type: SET_USERID,
  payload: data,
});

export const setUserName = (data) => ({
  type: SET_USERNAME,
  payload: data,
});
