import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ExplorerContainer from '../containers/ExplorerContainer';
import UniversidadesContainer from '../containers/UniversidadesContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import SchoolContainer from '../containers/SavedContainer';

import Icon from 'react-native-vector-icons/FontAwesome5';

const TabNavigator = createBottomTabNavigator({
    Buscar: {
        screen: ExplorerContainer,
        navigationOptions : {
            tabBarLabel:'Buscar',
            tabBarIcon:({tintColor}) => (
                <Icon name="search" color={tintColor} size={25} />
            )
        }
    }, 
    Universidades: {
        screen: UniversidadesContainer,
        navigationOptions : {
            tabBarLabel:'Universidades',
            tabBarIcon:({tintColor}) => (
                <Icon name="university" color={tintColor} size={25} />
            )
        }
    },
    // Carreras: {
    //     screen: SavedContainer,
    //     navigationOptions : {
    //         tabBarLabel:'Carreras',
    //         tabBarIcon:({tintColor}) => (
    //             <Icon name="award" color={tintColor} size={25} />
    //         )
    //     }
    // },
    // Profile: {
    //     screen: ProfileContainer,
    //     navigationOptions : {
    //         tabBarLabel:'Perfil',
    //         tabBarIcon:({tintColor}) => (
    //             <Icon name="user" color={tintColor} size={25} />
    //         )
    //     }
    // },
});

// TabNavigator.navigationOptions = {
//     header: null
// }

const MainView = createAppContainer(TabNavigator);

MainView.navigationOptions = {
    title: 'Directorio',
    headerStyle: {
        backgroundColor: 'rgba(2,2,53, 1.0)',
    },
}

export default MainView;