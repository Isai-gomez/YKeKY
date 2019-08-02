import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Slider from "react-native-slider"; 

export default class Slide extends Component {
    state={
        value: 5
    };

    render() {
        return(
            <View style={styles.container}>
                <Slider
                minimumValue= {0}
                maximumValue= {10}
                step={1}
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
                minimumTrackTintColor='#FFA500'  
                maximumTrackTintColor='#afafaf'
                thumbTintColor= 'rgba(2,2,53, 1.0)'
                />
                <Text>
                Tu calicacion es: {this.state.value}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
    }
  });