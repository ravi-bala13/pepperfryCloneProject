import {
  SET_ISLOADING,
  SET_TOKEN,
  SET_USERID,
  SET_USERNAME,
} from "./actionTypes";

export const setUserId = (data) => ({
  type: SET_USERID,
  payload: data,
});

export const setUserName = (data) => ({
  type: SET_USERNAME,
  payload: data,
});

export const setIsLoading = (data) => ({
  type: SET_ISLOADING,
  payload: data,
});

export const setToken = (data) => ({
  type: SET_TOKEN,
  payload: data,
});
