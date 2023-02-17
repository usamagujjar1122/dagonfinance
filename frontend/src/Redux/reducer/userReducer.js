import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  DEPOSITS_LOADED,
  DEPOSITS_LIST_LOADED,
  REFERAL_LIST_LOADED,
  HISTORY_LOADED,
} from "../types";

const initialState = {
  token: localStorage.getItem('dftoken'),
  isAuthorized: localStorage.getItem('dftoken')? true: false,
  isLoading: true,
  user: null,
  deposits: null,
  referals: null,
  history: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.data,
        isAuthorized: true,
        isLoading: false,
      };
    case DEPOSITS_LOADED:
      return {
        ...state,
        deposits: action.payload.data,
      };
    case DEPOSITS_LIST_LOADED:
      return {
        ...state,
        depositlist: action.payload.data,
      };
    case HISTORY_LOADED:
      return {
        ...state,
        history: action.payload.data,
      };
    case REFERAL_LIST_LOADED:
      return {
        ...state,
        referals: action.payload.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isLoading: false,
        isAuthorized: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthorized: false,
        isLoading: false,
        token: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerstatus: action.payload,
        inprogress: false,
        notification: action.payload.message,
        nextstep: true,
      };
    default: return state;
  }
}
