import axios from "axios";
import {URL} from '../../url'
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  DEPOSITS_LOADED,
  DEPOSITS_LIST_LOADED,
  REFERAL_LIST_LOADED,
  HISTORY_LOADED,
  LOADING,
  SET_LOADING,
} from "../types";

import { setAlert } from "./alertactions";

export const loadUser = (token) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/loaduser`,{token:token});
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    localStorage.removeItem("token");
  }
};
export const msg = (formdata,navigate) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/msg`,formdata);
    dispatch(setAlert(res.data.message, "success"));
    navigate('/')
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
  }
};
export const loaddeposits = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/loaddeposits`,{user:user});
    dispatch({
      type: DEPOSITS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message)
  }
};

export const loaddepositlist = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/loaddepositlist`,{user:user});
    dispatch({
      type: DEPOSITS_LIST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message)
  }
};

export const loadreferallist = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/loadreferallist`,{user:user});
    dispatch({
      type: REFERAL_LIST_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message)
  }
};

export const loadhistory = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/loadhistory`,{user:user});
    dispatch({
      type: HISTORY_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message)
  }
};

export const signup = (formdata, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/signup`, formdata);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: SET_LOADING,
    });
    navigate("/login");
    dispatch(setAlert(res.data.message, "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};

export const login = (formData,navigate) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/login`, formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("dftoken", res.data.token);
    dispatch({
      type: SET_LOADING,
    });
    navigate('/dashboard')
    dispatch(setAlert(res.data.message, "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("dftoken");
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    dispatch(setAlert("Logged out!", "success"));
  } catch (err) {
    dispatch(setAlert("Error logging out", "error"));
  }
};
export const edit = (formdata, navigate,setrefresh) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/edit`, formdata);
    navigate("/dashboard",{replace:true});
    dispatch(setAlert(res.data.message, "success"));
    setrefresh(prev=>!prev)
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};
export const withdrawcommision = (formdata,setrefresh) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/withdrawcommision`, formdata);
    dispatch(setAlert(res.data.message, "success"));
    setrefresh(prev=>!prev)
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};
export const deposit = (formdata, navigate,setrefresh) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/deposit`, formdata);
    navigate("/dashboard",{replace:true});
    dispatch(setAlert(res.data.message, "success"));
    setrefresh(prev=>!prev)
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};
export const withdraw = (formdata, navigate,setrefresh) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/withdraw`, formdata);
    navigate("/dashboard",{replace:true});
    dispatch(setAlert(res.data.message, "success"));
    setrefresh(prev=>!prev)
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));dispatch({
      type: SET_LOADING,
    });
  }
};
export const request = (formdata, navigate,setrefresh) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const res = await axios.post(`${URL}/user/request`, formdata);
    navigate("/dashboard",{replace:true});
    dispatch(setAlert(res.data.message, "success"));
    setrefresh(prev=>!prev)
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
    dispatch({
      type: SET_LOADING,
    });
  }
};