import {connect} from 'react-redux';
import {
  doGetCommentsByTopicId,
  doGetTopicDetail,
} from '../../redux/actions/topic';
import TopicDetailScreen from './screen';

const mapStateToProps = (state) => {
  const topicState = state.topic;

  return {
    listLoading: topicState.commentListLoading,
    listData: topicState.commentList,
    topic: topicState.topicDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doGetTopicDetail: (topicId) => dispatch(doGetTopicDetail(topicId)),
    doGetComments: (topicId) => dispatch(doGetCommentsByTopicId(topicId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailScreen);
