import React,{Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import LifePlanner from './_Instruccion_lp';
import OrientacionEducativa from './_Instruccion_Ts';
import DashboardHomeScreen from './DashboardHomeScreen';
// import DirectorioUniversitario from './DirectorioScreen';
import Profile from './ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
// import MainView from './DirectorioScreen';

const TabNavigator = createBottomTabNavigator({
    PlanDeVida: {
        screen: LifePlanner,
        navigationOptions : {
            tabBarLabel:'Plan de Vida',
            tabBarIcon:({tintColor}) => (
                <Icon name="seedling" color={tintColor} size={25} />
            )
        }
    },
    TestVocacional:{
        screen: OrientacionEducativa,
        navigationOptions : {
            tabBarLabel:'Test Vocacional',
            tabBarIcon:({tintColor}) => (
                <Icon name="file-alt" color={tintColor} size={25} />
            )
        }
    },
    Inicio:{
        screen: DashboardHomeScreen,
        navigationOptions : {
            tabBarLabel:'Inicio',
            tabBarIcon:({tintColor}) => (
                <Icon name="home" color={tintColor} size={25} />
            )
        }
    },
    // Directorio: {
    //     screen: DirectorioUniversitario,
    //     navigationOptions : {
    //         tabBarLabel:'Directorio Escolar',
    //         tabBarIcon:({tintColor}) => (
    //             <Icon name="address-book" color={tintColor} size={25} />
    //         )
    //     }
    // },
    Perfil:{
        screen: Profile,
        navigationOptions : {
            tabBarLabel:'Perfil',
            tabBarIcon:({tintColor}) => (
                <Icon name="user" color={tintColor} size={25} />
            )
        }
    }
},{
    initialRouteName: 'Inicio',
})

const TabDashboardView = createAppContainer(TabNavigator);

TabDashboardView.navigationOptions = {
    title: 'Home',
    header: null,
    headerStyle: {
        backgroundColor: 'rgba(2,2,53,1.0)',
    }
}

export default TabDashboardView;