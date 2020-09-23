import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileStack} from '../stacks/Profile';
import {screenNames} from '../../shared/screen';
import {TopicStack} from '../stacks/Topic';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={TopicStack}
        name={screenNames.Topic}
        options={{
          title: 'Topic',
        }}
      />
      <Tab.Screen
        component={ProfileStack}
        name={screenNames.Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
