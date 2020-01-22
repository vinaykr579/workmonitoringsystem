/* eslint-disable no-unused-vars */
import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Scr1 from './scr1';
import Scr2 from './scr2';
import Scr3 from './scr3';
import Scr4 from './scr4';
import Scr5 from './scr5';
import Scr6 from './scr6';
import Scr7 from './scr7';

const AppStack = createStackNavigator({
  Screen1: {
    screen: Scr1,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen2: {
    screen: Scr2,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen3: {
    screen: Scr3,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen4: {
    screen: Scr4,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen5: {
    screen: Scr5,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen6: {
    screen: Scr6,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Screen7: {
    screen: Scr7,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
});

const Main = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default Main;
