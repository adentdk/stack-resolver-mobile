import * as React from 'react';
import {AppDevider, AppLoading, AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';
import CreateNewTopic from './components/CreateNewTopic';
import TopicList from './components/TopicList';

const HomeScreen = ({
  navigation,
  doGetTopicList,
  listLoading,
  listData,
  listPagination,
}) => {
  const _onCreateNewTopicPressed = () => {
    navigation.navigate(screenNames.NewTopic);
  };

  const _onGetTopicList = () => {
    doGetTopicList({});
  };

  React.useEffect(() => {
    const bootstrap = () => {
      _onGetTopicList();
    };

    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppLoading visible={listLoading} />
      <AppWrapper>
        <CreateNewTopic onPress={_onCreateNewTopicPressed} />
        <AppDevider height={20} />
        <TopicList pagination={listPagination} rows={listData} />
      </AppWrapper>
    </>
  );
};

export default HomeScreen;
