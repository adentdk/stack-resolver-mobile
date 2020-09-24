import {connect} from 'react-redux';
import {doGetCommentsByTopicId} from '../../redux/actions/topic';
import TopicDetailScreen from './screen';

const mapStateToProps = (state) => {
  const topicState = state.topic;

  return {
    listLoading: topicState.commentListLoading,
    listData: topicState.commentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doGetComments: (topicId) => dispatch(doGetCommentsByTopicId(topicId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailScreen);
