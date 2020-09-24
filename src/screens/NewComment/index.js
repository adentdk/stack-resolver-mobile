import {connect} from 'react-redux';
import {
  createCommentSetDefault,
  doCreateComment,
} from '../../redux/actions/topic';
import NewCommentScreen from './screen';

const mapStateToProps = (state) => {
  const topicState = state.topic;

  return {
    createLoading: topicState.commentCreateLoading,
    createSuccess: topicState.commentCreateSuccess,
    createFailed: topicState.commentCreateFailed,
    message: topicState.message,
    error: topicState.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doCreateComment: (data, topicId) =>
      dispatch(doCreateComment(data, topicId)),
    createCommentSetDefault: () => dispatch(createCommentSetDefault()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentScreen);
