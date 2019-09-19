import React from "react";
import { createStackNavigator, createAppContainer,createSwitchNavigator, createDrawerNavigator } from "react-navigation";

//screens App
import Home from '../screens/HomeScreen';
import Test from '../screens/TestScreen';
import LifePlanner from '../screens/LifePlannerScreen';
import Directorio from '../screens/DirectorioScreen';
import ModalComponent from '../components/ModalComponent';

import DetalleUniversidad from '../components/universidadVistaDetalle';

import ResultTS from '../screens/ResultTestScreen';
import ResultLP from '../screens/ResultLifePlannerScreen';

import Instruccion_Lp from '../screens/_Instruccion_lp';
import Instruccion_Ts from '../screens/_Instruccion_Ts';

import Dashboard from '../screens/Dashboard';
import DashboardScreen from '../screens/DashboardScreen';

import DirectorioP1 from '../screens/directorio/Pantalla1';

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
  
const AppNavigator = createStackNavigator(
    {
      Home,
      Test,
      LifePlanner,
      ResultTS,
      ResultLP,
      Directorio,
      Instruccion_Lp,
      Instruccion_Ts,
      DetalleUniversidad,
      ModalComponent,
      Dashboard,
      DirectorioP1,
      DashboardScreen,
      Becas
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
    Recuperar
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
  AuthLoading
},
{
  initialRouteName: "AuthLoading",
  defaultNavigationOptions: {
    header: null
  }
}));