import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,StatusBar,TouchableOpacity,TextInput,Alert} from 'react-native';
import colors from '../styles/colors';
import Orientation from 'react-native-orientation';
import axios from 'axios';

const url = "http://3.17.60.127:3001/request-password-reset/"

export default class RecuperarContrasenaScreen extends Component{
    static navigationOptions = {
        header: null,
    }

    constructor(){
        super();
        this.state = {
            emailRecuperacion: ''
        }
    }

    componentDidMount(){
        Orientation.lockToPortrait();
    }

    async enviarCorreoRecuperacion(){
        axios.post(url,
            {
                "email": this.state.emailRecuperacion
            }).then(response => {
                if(response.status >= 200 && response.status < 300){
                    Alert.alert("Informacion", "Verifique su bandeja de correo electrónico")
                }
            }).catch(error => {
                Alert.alert("Advertencia", error)
            })
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
                                <Text style={styles.textTitle}>¿Olvidaste tu contraseña?</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    placeholder={'Escribe tu correo electrónico'}
                                    placeholderTextColor={colors.blue}
                                    onChangeText={(email) => {this.setState({emailRecuperacion: email})}}
                                />
                                <TouchableOpacity style={styles.boton}
                                onPress={()=>{this.enviarCorreoRecuperacion();}}
                                >
                                    <Text style={styles.textBoton}>Recuperar</Text>
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
        textAlign: 'justify',
        fontFamily: 'GothamBold'
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
        marginBottom: 20
    },
    boton: {
        backgroundColor: colors.darkOrange,
        borderRadius: 20,
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBoton: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'GothamBook'
    }
})