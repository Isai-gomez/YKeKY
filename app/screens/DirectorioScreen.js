import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ExplorerContainer from '../containers/ExplorerContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import SchoolContainer from '../containers/SavedContainer';


const TabNavigator = createBottomTabNavigator({
    Buscar: ExplorerContainer,
    Universidades: InboxContainer,
    Carreras: SavedContainer,
    Profile: ProfileContainer,
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