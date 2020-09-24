import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../../screens/Home';
import TopicDetailScreen from './../../screens/TopicDetail';
import NewTopicScreen from './../../screens/NewTopic';
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
        component={HomeScreen}
        name={screenNames.Topic}
        options={{
          title: 'Topic',
        }}
      />
      <Stack.Screen
        component={TopicDetailScreen}
        name={screenNames.TopicDetail}
      />
      <Stack.Screen
        component={NewTopicScreen}
        name={screenNames.NewTopic}
        options={{
          title: 'Create New Topic',
        }}
      />
    </Stack.Navigator>
  );
};
