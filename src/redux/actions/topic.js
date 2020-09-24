import client from '../../shared/client';
import {
  GET_TOPICS_FAILED,
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
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
      // const response = {pagination: {}, rows: []};

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
