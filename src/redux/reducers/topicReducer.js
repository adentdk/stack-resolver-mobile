import {
  CREATE_TOPIC_FAILED,
  CREATE_TOPIC_LOADING,
  CREATE_TOPIC_SUCCESS,
  GET_TOPICS_FAILED,
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
  CREATE_TOPIC_SET_DEFAULT,
  GET_TOPIC_COMMENTS_LOADING,
  GET_TOPIC_COMMENTS_SUCCESS,
  GET_TOPIC_COMMENTS_FAILED,
  CREATE_TOPIC_COMMENT_LOADING,
  CREATE_TOPIC_COMMENT_SUCCESS,
  CREATE_TOPIC_COMMENT_FAILED,
  CREATE_COMMENT_SET_DEFAULT,
  GET_TOPIC_DETAIL_LOADING,
  GET_TOPIC_DETAIL_SUCCESS,
  GET_TOPIC_DETAIL_FAILED,
} from '../constants';

const initialState = {
  topicListLoading: false,
  topicListSuccess: false,
  topicListFailed: false,
  topicDetailLoading: false,
  topicDetailSuccess: false,
  topicDetailFailed: false,
  topicCreateLoading: false,
  topicCreateSuccess: false,
  topicCreateFailed: false,
  commentCreateLoading: false,
  commentCreateSuccess: false,
  commentCreateFailed: false,
  commentListLoading: false,
  commentListSuccess: false,
  commentListFailed: false,
  topicList: [],
  topicPagination: {},
  topicDetail: {tags: []},
  commentList: [],
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
        topicDetailLoading: false,
        topicDetailFailed: true,
        error: action.payload,
      };
    case GET_TOPIC_DETAIL_LOADING:
      return {
        ...state,
        topicDetailLoading: true,
        topicDetailSuccess: false,
        topicDetailFailed: false,
      };
    case GET_TOPIC_DETAIL_SUCCESS:
      return {
        ...state,
        topicDetailLoading: false,
        topicDetailSuccess: true,
        topicDetail: action.payload,
      };
    case GET_TOPIC_DETAIL_FAILED:
      return {
        ...state,
        topicDetailLoading: false,
        topicDetailFailed: true,
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

    case GET_TOPIC_COMMENTS_LOADING:
      return {
        ...state,
        commentListLoading: true,
        commentListSuccess: false,
        commentListFailed: false,
      };
    case GET_TOPIC_COMMENTS_SUCCESS:
      return {
        ...state,
        commentListLoading: false,
        commentListSuccess: true,
        commentList: action.payload,
      };
    case GET_TOPIC_COMMENTS_FAILED:
      return {
        ...state,
        commentListLoading: false,
        commentListFailed: true,
        error: action.payload,
      };

    case CREATE_TOPIC_COMMENT_LOADING:
      return {
        ...state,
        commentCreateLoading: true,
        commentCreateSuccess: false,
        commentCreateFailed: false,
      };
    case CREATE_TOPIC_COMMENT_SUCCESS:
      return {
        ...state,
        commentCreateLoading: false,
        commentCreateSuccess: true,
        message: action.payload,
      };
    case CREATE_TOPIC_COMMENT_FAILED:
      return {
        ...state,
        commentCreateLoading: false,
        commentCreateFailed: true,
        error: action.payload,
      };
    case CREATE_COMMENT_SET_DEFAULT:
      return {
        ...state,
        commentCreateLoading: false,
        commentCreateSuccess: false,
        commentCreateFailed: false,
      };
    default:
      return state;
  }
};
