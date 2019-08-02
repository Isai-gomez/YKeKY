import React from "react";
import { createStackNavigator, createAppContainer,createSwitchNavigator, createDrawerNavigator } from "react-navigation";

//screens App
import Home from '../screens/HomeScreen';
import Test from '../screens/TestScreen';
import LifePlanner from '../screens/LifePlannerScreen';

import ResultTS from '../screens/ResultTestScreen';
import ResultLP from '../screens/ResultLifePlannerScreen';

//Screens Auth
import Initial from '../screens/InitialScreen';
import Swiper from '../screens/SwiperScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';

//Screens AuthLoading
import AuthLoading from '../screens/AuthLoadingScreen';
  
const AppNavigator = createStackNavigator(
    {
      Home,
      Test,
      LifePlanner,
      ResultTS,
      ResultLP
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#F3CE12',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      },
    }
);

const AuthNavigator = createStackNavigator(
  {
    Initial,
    Swiper,
    Login,
    Register
},
{
  initialRouteName: "Initial",
  defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#F3CE12',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  },
})

const Drawer = createDrawerNavigator({
  Home,
  Test,
  ResultTS
},
{
  hideStatusBar: true,
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: '#6b52ae',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#6b52ae',
  },
});

export default createAppContainer(createSwitchNavigator({
  AuthNavigator,
  AppNavigator,
  AuthLoading,
  Drawer
},
{
  initialRouteName: "AuthLoading",
  defaultNavigationOptions: {
    header: null
  }
}));