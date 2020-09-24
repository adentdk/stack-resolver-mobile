import {connect} from 'react-redux';
import {createTopicSetDefault, doCreateTopic} from '../../redux/actions/topic';
import NewTopicScreen from './screen';

const mapStateToProps = (state) => {
  const topicState = state.topic;

  return {
    createLoading: topicState.topicCreateLoading,
    createSuccess: topicState.topicCreateSuccess,
    createFailed: topicState.topicCreateFailed,
    message: topicState.message,
    error: topicState.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doCreateTopic: (data) => dispatch(doCreateTopic(data)),
    createTopicSetDefault: () => dispatch(createTopicSetDefault()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTopicScreen);
