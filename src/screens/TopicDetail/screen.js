import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import moment from 'moment';
import {AppBox, AppDevider, AppTextInput, AppWrapper} from '../../component';
import colors from '../../shared/colors';
import {screenNames} from '../../shared/screen';
import CardTopic from './components/CardTopic';
import CommentBox from './components/CommentBox';

const TopicDetailScreen = ({
  route,
  navigation,
  listLoading,
  listData,
  topic,
  doGetTopicDetail,
  doGetComments,
}) => {
  const reload = route?.params?.reload ?? false;
  const topicId = route?.params?.topicId ?? false;

  const _onAnswerPressed = () => {
    navigation.navigate(screenNames.NewComment, {
      topic,
    });
  };

  const _onGetTopicDetail = React.useCallback(() => doGetTopicDetail(topicId), [
    doGetTopicDetail,
    topicId,
  ]);

  const _onGetCommentList = React.useCallback(() => doGetComments(topicId), [
    doGetComments,
    topicId,
  ]);

  React.useEffect(() => {
    const bootstrap = () => {
      _onGetTopicDetail();
      _onGetCommentList();
    };
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (reload) {
      _onGetTopicDetail();
      _onGetCommentList();
    }
  }, [_onGetCommentList, _onGetTopicDetail, reload]);

  return (
    <>
      <View style={{flex: 1}}>
        <AppWrapper
          scrollable={true}
          refreshing={listLoading}
          onRefresh={() => {
            _onGetTopicDetail();
            _onGetCommentList();
          }}>
          <CardTopic topic={topic} />
          <AppDevider height={30} />
          <AppBox flex={1}>
            <Text style={styles.heading}>{topic.commentCount} Answers</Text>
          </AppBox>
          {listData.map((comment, index) => {
            return (
              <View key={index.toString()}>
                <CommentBox
                  content={comment.content}
                  footer={`${comment.createdBy} (${moment(
                    comment.createdAt,
                  ).fromNow()})`}
                />
                <AppDevider height={10} />
              </View>
            );
          })}
        </AppWrapper>
      </View>
      <AppBox height={62} color={colors.grey + '55'}>
        <TouchableOpacity onPress={_onAnswerPressed}>
          <AppTextInput placeholder="Your Answer" disabled={true} />
        </TouchableOpacity>
      </AppBox>
    </>
  );
};

export default TopicDetailScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 5,
  },
});
