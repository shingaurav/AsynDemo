//This is an example code to pass values between two screens using React Navigator// 
import React, { Component } from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';


const App = createStackNavigator({
  
    FirstPage: {
      screen: FirstPage,
      navigationOptions: {headerShown: false },
    },
    // default screen is  first page 
    //if we do not define initialRouteName
    SecondPage: {
      screen: SecondPage,
     
    },
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);