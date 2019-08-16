import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native';
import colors from '../styles/colors';

export default class RecuperarContrasenaScreen extends Component{
    static navigationOptions = {
        header: null,
    }

    render(){
        return(
            <ImageBackground
                source={require('../assets/recuperar/fondo.png')}
                style={{flex: 1, resizeMode: 'cover'}}
            >
                <ImageBackground
                    source={require('../assets/recuperar/fondo2.png')}
                    style={{flex: 1, resizeMode: 'cover'}}
                >
                    <ImageBackground
                        source={require('../assets/recuperar/fondo3.png')}
                        style={{flex: 1, resizeMode: 'cover'}}
                    >
                        
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray03,
    }
})