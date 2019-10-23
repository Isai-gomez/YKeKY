import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import colors from '../styles/colors';
import Orientation from 'react-native-orientation';

export default class RecuperarContrasenaScreen extends Component{
    static navigationOptions = {
        header: null,
    }

    componentDidMount(){
        Orientation.lockToPortrait();
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
                        <ImageBackground
                            source={require('../assets/recuperar/logo.png')}
                            style={{flex: 1, resizeMode: 'cover'}}
                        >
                            {/* <StatusBar barStyle = 'default' hidden = {false} backgroundColor = {colors.blue} translucent = {true}/>     */}
                            <View style={styles.container}>
                                <Text style={styles.textTitle}>Forgot Your</Text>
                                <Text style={styles.textTitle}>Password?</Text>
                                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet mauris accumsan, pharetra massa sit amet, vehicula sapien.</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    placeholder={'Type your email'}
                                    placeholderTextColor={colors.blue}
                                />
                                <TouchableOpacity style={styles.boton}>
                                    <Text>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.gray03,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'justify'
    },
    text: {
        color: colors.white,
        textAlign: 'justify',
        marginHorizontal: 40
    },
    textInput: {
        backgroundColor: colors.white,
        width: '80%',
        borderRadius: 5,
        marginTop: 20,
    },
    boton: {
        backgroundColor: colors.darkOrange
    }
})