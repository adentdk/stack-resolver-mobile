import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppBox, AppDevider, AppTextInput, AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';
import CreateNewTopic from './components/CreateNewTopic';
import TopicList from './components/TopicList';

const HomeScreen = ({navigation}) => {
  const _onCreateNewTopicPressed = () => {
    console.log('halo');
    navigation.navigate(screenNames.NewTopic);
  };
  return (
    <AppWrapper>
      <CreateNewTopic onPress={_onCreateNewTopicPressed} />
      <AppDevider height={20} />
      <TopicList />
    </AppWrapper>
  );
};

export default HomeScreen;
