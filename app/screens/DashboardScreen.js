import React, { Component } from 'react';
import {ImageBackground, View, ScrollView, Image, StyleSheet, Text,TouchableOpacity,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        header: null
    }

    _logout = async() => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate("Login");
          } catch(e) {
            console.log("Error" + e)
          }
        
          console.log('Done.')
    }

    render() {
        return (
            <ImageBackground source={require('../assets/dashboard/fondo.png')} style={{flex:1}} resizeMode={'cover'} >
                <Image source={require('../assets/dashboard/Recurso1.png')} style={{width:120, height:120,position:'absolute',top:'-5%',right:'-10%'}} />
                <Image source={require('../assets/dashboard/Recurso2.png')} style={{width:120, height:80,position:'absolute',bottom:'-4%',left:'-10%'}} />
                <Image source={require('../assets/dashboard/Recurso3.png')} style={{width:110, height:110,position:'absolute',bottom:'-3%',right:'-9%'}} />
                <View style={styles.container}>
                    <ScrollView style={{flex: 1}}>
                    <Image source={require('../assets/dashboard/Logo.png')} style={styles.logo} />
                    <Text style={styles.titulo}>SECCIONES</Text>
                    <Text style={styles.subtitulo}>Seleccione la opción que quieras realizar.</Text>
                    <View style={styles.card}>
                        <TouchableOpacity 
                            style={styles.cartita} 
                            onPress={()=>{this.props.navigation.navigate('Instruccion_Ts')}} >
                            <Image source={require('../assets/dashboard/IconoTestVocacional.png')} style={styles.imagen} resizeMode={'center'} />
                            <Text style={styles.menuText}>Test Vocacional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cartita} 
                            onPress={()=>{this.props.navigation.navigate('Instruccion_Lp')}} >
                            <Image source={require('../assets/dashboard/IconoPlanDeVida.png')} style={styles.imagen} resizeMode={'contain'} />
                            <Text style={styles.menuText}>Plan de Vida</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cartita} 
                            onPress={()=>{this.props.navigation.navigate('DirectorioP1')}} >
                            <Image source={require('../assets/dashboard/IconoGuiaYKeKY.png')} style={styles.imagen} resizeMode={'contain'} />
                            <Text style={styles.menuText}>Directorio {"\n"} Escolar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cartita} 
                            onPress={()=>{this.props.navigation.navigate('Becas')}} >
                            <Image source={require('../assets/dashboard/IconoBecas.png')} style={styles.imagen} resizeMode={'center'} />
                            <Text style={styles.menuText}>Becas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cartitaCerrarSesión} 
                            onPress={ ()=> {this._logout()} } >
                            <Text style={styles.menuText}>Cerrar {"\n"} Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 100,
        height: 33,
        margin: 15,
    },
    card:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    cartita: {
        alignItems:"center",
        justifyContent: 'center',
        width: 155,
        height: 170,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        }
    },
    cartitaCerrarSesión: {
        alignItems:"center",
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        }
    },
    imagen: {
        width: 100,
        height: 140
    },
    titulo: {
        color: '#FFF',
        fontFamily: 'GothamBold',
        fontSize: 20,
        marginLeft: 25,
        marginTop: 30
    },
    subtitulo: {
        color: '#FFF',
        fontFamily: 'GothamLight',
        fontSize: 14,
        marginLeft: 25,
        marginBottom: 15
    },
    menuText: {
        fontFamily: 'GothamBold',
        fontSize: 15,
        color: 'rgba(29,58,180, 1.0)',
        textAlign: 'center'
    }
})