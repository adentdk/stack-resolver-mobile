import {
  CREATE_TOPIC_FAILED,
  CREATE_TOPIC_LOADING,
  CREATE_TOPIC_SUCCESS,
  GET_TOPICS_FAILED,
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
  CREATE_TOPIC_SET_DEFAULT,
} from '../constants';

const initialState = {
  topicListLoading: false,
  topicListSuccess: false,
  topicListFailed: false,
  topicCreateLoading: false,
  topicCreateSuccess: false,
  topicCreateFailed: false,
  topicList: [],
  topicPagination: {},
  error: null,
  message: null,
};

export const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS_LOADING:
      return {
        ...state,
        topicListLoading: true,
        topicListSuccess: false,
        topicListFailed: false,
      };
    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        topicListLoading: false,
        topicListSuccess: true,
        topicList: action.payload.rows,
        topicPagination: action.payload.pagination,
      };
    case GET_TOPICS_FAILED:
      return {
        ...state,
        topicListLoading: false,
        topicListFailed: true,
        error: action.payload,
      };

    case CREATE_TOPIC_LOADING:
      return {
        ...state,
        topicCreateLoading: true,
        topicCreateSuccess: false,
        topicCreateFailed: false,
      };
    case CREATE_TOPIC_SUCCESS:
      return {
        ...state,
        topicCreateLoading: false,
        topicCreateSuccess: true,
        message: action.payload,
      };
    case CREATE_TOPIC_FAILED:
      return {
        ...state,
        topicCreateLoading: false,
        topicCreateFailed: true,
        error: action.payload,
      };
    case CREATE_TOPIC_SET_DEFAULT:
      return {
        ...state,
        topicCreateLoading: false,
        topicCreateSuccess: false,
        topicCreateFailed: false,
      };
    default:
      return state;
  }
};
