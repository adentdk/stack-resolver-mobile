import client from '../../shared/client';
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

export const doGetTopicList = ({
  page = 1,
  pageSize = 20,
  searchTitle = '',
  userId = '',
  tags = '',
}) => {
  return async (dispatch) => {
    dispatch({
      type: GET_TOPICS_LOADING,
    });

    try {
      const params = {
        page,
        pageSize,
        searchTitle,
        userId,
        tags,
      };

      const response = await client.get('/topic/topics/', {params});

      dispatch({
        type: GET_TOPICS_SUCCESS,
        payload: response.data.data,
        response,
      });
    } catch (error) {
      dispatch({
        type: GET_TOPICS_FAILED,
        payload: error.response?.data?.message ?? error.message,
        error,
      });
    }
  };
};

export const doGetTopicDetail = (topicId) => {
  return async (dispatch) => {
    dispatch({
      type: GET_TOPIC_DETAIL_LOADING,
    });

    try {
      const response = await client.get('/topic/topics/' + topicId);

      dispatch({
        type: GET_TOPIC_DETAIL_SUCCESS,
        payload: response.data.data,
        response,
      });
    } catch (error) {
      dispatch({
        type: GET_TOPIC_DETAIL_FAILED,
        payload: error.response?.data?.message ?? error.message,
        error,
      });
    }
  };
};

export const doCreateTopic = ({title, tags, content}) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_TOPIC_LOADING,
    });
    try {
      const body = {title, tags, content};

      const response = await client.post('/topic/topics', body);

      dispatch({
        type: CREATE_TOPIC_SUCCESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: CREATE_TOPIC_FAILED,
        payload: error.response?.data?.message ?? error.message,
        error,
      });
    }
  };
};

export const createTopicSetDefault = () => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TOPIC_SET_DEFAULT,
    });
  };
};

export const doGetCommentsByTopicId = (topicId) => {
  return async (dispatch) => {
    dispatch({
      type: GET_TOPIC_COMMENTS_LOADING,
    });
    try {
      const comments = await client.get(`/topic/topics/${topicId}/comments`);
      dispatch({
        type: GET_TOPIC_COMMENTS_SUCCESS,
        payload: comments.data.data,
      });
    } catch (error) {
      dispatch({
        type: GET_TOPIC_COMMENTS_FAILED,
        payload: error?.response?.data?.message ?? error.message,
      });
    }
  };
};

export const doCreateComment = ({title, tags, content}, topicId) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_TOPIC_COMMENT_LOADING,
    });
    try {
      const body = {title, tags, content};

      const response = await client.post(
        `/topic/topics/${topicId}/comments`,
        body,
      );

      dispatch({
        type: CREATE_TOPIC_COMMENT_SUCCESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: CREATE_TOPIC_COMMENT_FAILED,
        payload: error.response?.data?.message ?? error.message,
        error,
      });
    }
  };
};

export const createCommentSetDefault = () => {
  return (dispatch) => {
    dispatch({
      type: CREATE_COMMENT_SET_DEFAULT,
    });
  };
};
