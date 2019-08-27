import React,{Component} from 'react';
import {View, Text, StyleSheet,Image,ImageBackground,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

export default class InitialScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'InitialScreen'
    }

    render(){
        return(
            <ImageBackground source={require('../assets/images/appInicioFondo.png')} style={{width: '100%', height: '100%'}} >
                <StatusBar barStyle = 'default' hidden = {false} backgroundColor = {colors.blue} translucent = {true}/>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/inicio.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.titulo}>MINI TUTORIAL</Text>
                            <Text style={styles.texto}>YKEKY es una aplicación</Text>
                            <Text style={[styles.texto, {fontWeight: 'bold'}]}>que nos servirá para conocer más</Text>
                            <Text style={styles.texto}>nuestro próposito de vida.</Text>
                            <TouchableOpacity
                                style={styles.buton}
                                onPress={() => this.props.navigation.navigate("Swiper")}
                            >
                                <Text style={{color:'white',fontFamily: 'GothamBold',}}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(220,227,14, 0.5)'
    },
    main: {
        flex: 1,
        // backgroundColor: 'rgba(40,14,227, 0.3)',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain'
    },
    footer: {
        flex: 1,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -70
    },
    titulo: {
        color: colors.blue,
        fontSize: 20,
        fontFamily: 'GothamBold',
    },
    texto: {
        fontFamily: 'GothamBook',
        color: 'white',
        fontSize: 16,
    },
    buton: {
        backgroundColor: colors.blue,
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
        top: 25
    }
})