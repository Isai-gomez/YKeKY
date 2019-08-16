import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import colors from '../styles/colors';

export default class SearchBar extends Component {
  render() {
  	return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
      {/* <View style={styles.line}></View> */}
        <Icon
          name="ios-search"
          size={20}
          color={colors.gray02}
          style={styles.searchIcon}
        />
        <TextInput style={styles.textInput} placeholder={'Escriba algo...'} >
        </TextInput>
      </View>
    </View>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: 'blue',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 80,
    zIndex: 99,
    borderColor: colors.gray03,
  },
  line: {
    borderWidth: 5,
    width: '100%',
    borderColor: colors.gray03,
    marginBottom: 30
  },
  searchContainer: {
  	display: 'flex',
  	borderWidth: 1,
  	borderColor: colors.gray03,
  	backgroundColor: colors.white,
  	shadowColor: 'rgba(0,0,0,0.1)',
  	shadowOffset: { width: 5, height: 15 },
  	shadowOpacity: 0.7,
  	shadowRadius: 10,
  	borderRadius: 3,
  	height: 40,
  	marginTop: 28,
  	marginLeft: 21,
    marginRight: 21,
    
  },
  searchIcon: {
  	position: 'absolute',
  	left: 18,
  	top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 0,
    marginLeft: 44,
    color: colors.gray02,
  },
});