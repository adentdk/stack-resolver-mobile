import * as React from 'react';
import {AppDevider, AppLoading, AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';
import CreateNewTopic from './components/CreateNewTopic';
import TopicList from './components/TopicList';

const HomeScreen = ({
  navigation,
  route,
  doGetTopicList,
  listLoading,
  listData,
  listPagination,
}) => {
  const reload = route?.params?.reload ?? false;

  const _onCreateNewTopicPressed = () => {
    navigation.navigate(screenNames.NewTopic);
  };

  const _onGetTopicList = React.useCallback(() => {
    doGetTopicList({});
  }, [doGetTopicList]);

  const _onItemPress = (topic) => {
    navigation.navigate(screenNames.TopicDetail, {
      topicId: topic.id,
      title: topic.title,
    });
  };

  React.useEffect(() => {
    const bootstrap = () => {
      _onGetTopicList();
    };

    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (reload) {
      console.log(reload);
      _onGetTopicList();
    }
  }, [_onGetTopicList, reload]);

  return (
    <>
      <AppLoading visible={listLoading} />
      <AppWrapper scrollable={true}>
        <CreateNewTopic onPress={_onCreateNewTopicPressed} />
        <AppDevider height={20} />
        <TopicList
          pagination={listPagination}
          rows={listData}
          onItemPress={_onItemPress}
        />
      </AppWrapper>
    </>
  );
};

export default HomeScreen;
