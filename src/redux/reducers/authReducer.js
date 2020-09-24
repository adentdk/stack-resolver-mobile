import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from '../constants';

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  loginFailed: false,
  logoutLoading: false,
  logoutSuccess: false,
  logoutFailed: false,
  registerLoading: false,
  registerSuccess: false,
  registerFailed: false,
  getProfileLoading: false,
  getProfileSuccess: false,
  getProfileFailed: false,
  auth: {
    email: '',
    token: null,
  },
  user: {
    display_name: '',
    full_name: '',
  },
  error: null,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginFailed: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        auth: {
          ...state.auth,
          token: action.payload,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginFailed: true,
        error: action.payload,
      };

    case LOGOUT_LOADING:
      return {
        ...state,
        logoutLoading: true,
        logoutSuccess: false,
        logoutFailed: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        logoutSuccess: true,
        auth: {
          ...state.auth,
          token: null,
        },
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutLoading: false,
        logoutFailed: true,
        error: action.payload,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true,
        registerSuccess: false,
        registerFailed: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: true,
        message: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        registerLoading: false,
        registerFailed: true,
        error: action.payload,
      };

    case GET_PROFILE_LOADING:
      return {
        ...state,
        getProfileLoading: true,
        getProfileSuccess: false,
        getProfileFailed: false,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfileLoading: false,
        getProfileSuccess: true,
        auth: {
          ...state.auth,
          email: action.payload.email,
        },
        user: action.payload.user,
      };
    case GET_PROFILE_FAILED:
      return {
        ...state,
        getProfileLoading: false,
        getProfileFailed: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
