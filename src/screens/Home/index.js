import {connect} from 'react-redux';
import {doGetTopicList} from '../../redux/actions/topic';
import HomeScreen from './screen';

const mapStateToProps = (state) => {
  const topicState = state.topic;

  return {
    listLoading: topicState.topicListLoading,
    listData: topicState.topicList,
    listPagination: topicState.topicPagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doGetTopicList: (filter) => dispatch(doGetTopicList(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
