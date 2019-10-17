import React from "react";
import { createStackNavigator, createAppContainer,createSwitchNavigator, createDrawerNavigator } from "react-navigation";

//screens App
import Home from '../screens/HomeScreen';
import Test from '../screens/TestVocacionalScreen';
import TestVocacionalScreen from '../screens/TestVocacionalScreen'
import LifePlanner from '../screens/LifePlannerScreen';

import Profile from '../screens/ProfileScreen';
// import Directorio from '../screens/DirectorioScreen';

import DetalleUniversidad from '../components/universidadVistaDetalle';

import ResultTS from '../screens/ResultTestScreen';
import ResultLP from '../screens/ResultLifePlannerScreen';

import Instruccion_Lp from '../screens/_Instruccion_lp';
import Instruccion_Ts from '../screens/_Instruccion_Ts';

import Dashboard from '../screens/Dashboard';
import DashboardScreen from '../screens/DashboardScreen';

import Becas from '../screens/BecasScreen';

//Screens Auth
import Initial from '../screens/InitialScreen';
import Swiper from '../screens/SwiperScreen';
import Swiper2 from '../screens/swiperScreen2';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Recuperar from '../screens/RecuperarContrasenaScreen';

//Screens AuthLoading
import AuthLoading from '../screens/AuthLoadingScreen';
// Directorio
import DirectorioP1 from '../screens/directorio/Pantalla1';
import Pantalla2 from '../screens/directorio/Pantalla2';
import Pantalla3 from '../screens/directorio/Pantalla3';
import Pantalla4 from '../screens/directorio/Pantalla4';
import Pantalla5 from '../screens/directorio/Pantalla5';

  
const AppNavigator = createStackNavigator(
    {
      Home:{
        screen: Home,
        path: 'home/'
      },
      Test,
      LifePlanner,
      ResultTS,
      ResultLP,
      // Directorio,
      Instruccion_Lp: {
        screen: Instruccion_Lp,
        path: 'lifeplanner'
      },
      Instruccion_Ts:{
        screen: Instruccion_Ts,
        path: 'testvocacional'
      },
      DetalleUniversidad,
      Dashboard,
      DirectorioP1,
      DashboardScreen,
      Becas: {
        screen: Becas,
        path: 'becas'
      },
      Pantalla2,
      Pantalla3,
      Pantalla4,
      Pantalla5,
      TestVocacionalScreen,
      Profile
    },
    {
      initialRouteName: "DashboardScreen",
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
    Register,
    Recuperar,
  
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
  AppNavigator:{
    screen: AppNavigator,
    path: ''
  },
  AuthLoading
},
{
  initialRouteName: "AuthLoading",
  defaultNavigationOptions: {
    header: null
  }
}));