import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
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
  doGetComments,
}) => {
  const topic = route?.params?.topic ?? {};
  const reload = route?.params?.reload ?? false;

  const _onAnswerPressed = () => {
    navigation.navigate(screenNames.NewComment, {
      topic,
    });
  };

  const _onGetCommentList = React.useCallback(() => doGetComments(topic.id), [
    doGetComments,
    topic.id,
  ]);

  React.useEffect(() => {
    const bootstrap = () => _onGetCommentList();
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (reload) {
      _onGetCommentList();
    }
  }, [_onGetCommentList, reload]);

  return (
    <>
      <View style={{flex: 1}}>
        <AppWrapper scrollable={true}>
          <CardTopic topic={topic} />
          <AppDevider height={10} />
          <AppBox flex={1}>
            <Text>{topic.commentCount} Answers</Text>
          </AppBox>
          {listData.map((comment, index) => {
            return (
              <CommentBox key={index.toString()} content={comment.content} />
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
