import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import AppNavigator from './navigator/StackNavigator';
import TabNavigator from './screens/Dashboard';

export default class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
