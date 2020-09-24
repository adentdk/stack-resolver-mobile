import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TopicScreen from '../../screens/Topic';
import TopicDetailScreen from './../../screens/TopicDetail';
import NewTopicScreen from './../../screens/NewTopic';
import NewCommentScreen from '../../screens/NewComment';
import {screenNames} from '../../shared/screen';
import {NavHeaderAuthenticated} from '../../component';

const Stack = createStackNavigator();
export const TopicStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: NavHeaderAuthenticated,
      }}>
      <Stack.Screen
        component={TopicScreen}
        name={screenNames.Topic}
        options={{
          title: 'Stack Resolver',
        }}
      />
      <Stack.Screen
        component={TopicDetailScreen}
        name={screenNames.TopicDetail}
        options={{
          title: 'Topic Detail',
        }}
      />
      <Stack.Screen
        component={NewTopicScreen}
        name={screenNames.NewTopic}
        options={{
          title: 'Create New Topic',
        }}
      />
      <Stack.Screen
        component={NewCommentScreen}
        name={screenNames.NewComment}
        options={{
          title: 'Your Answer',
        }}
      />
    </Stack.Navigator>
  );
};
