import {
  GET_TOPICS_FAILED,
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
} from '../constants';

const initialState = {
  topicListLoading: false,
  topicListSuccess: false,
  topicListFailed: false,
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
    default:
      return state;
  }
};
