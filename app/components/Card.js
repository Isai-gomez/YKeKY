import React from 'react'
import {Image, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View, StyleSheet} from "react-native";
const deviceWidth = Dimensions.get("window").width;

export class Card extends React.Component {
    render() {
        return (
            <View>
                <View><Image source={{uri: this.props.image}} style={styles.image} /></View>
                <View><Text>{this.props.titulo}</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: 100,
        height: 100
    }
})
