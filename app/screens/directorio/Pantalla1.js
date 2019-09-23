import React, { Component } from 'react';
import {ImageBackground,Image,View,StyleSheet,Text,Picker,TouchableOpacity,Alert} from 'react-native';

export default class Pantalla1 extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(){
        super();
        this.state = {
            estados: "Seleccione"
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/directorio/pantalla1Fondo.png')} style={{flex:1}} resizeMode={'cover'}>
                <Image source={require('../../assets/directorio/Recurso1Pantalla1.png')} style={{width:100, height:100,position:'absolute',top:'-11%',left:'-10%'}} />
                <Image source={require('../../assets/directorio/Recurso2Pantalla1.png')} style={{width:100, height:100,position:'absolute',top:'-10%',left:'35%'}} />
                <Image source={require('../../assets/directorio/Recurso3Pantalla1.png')} style={{width:100, height:100,position:'absolute',top:'-10%',right:'0%'}} />
                <Image source={require('../../assets/directorio/Recurso4Pantalla1.png')} style={{width:100, height:100,position:'absolute',bottom:'-10%',left:'0%'}} />
                <Image source={require('../../assets/directorio/Recurso5Pantalla1.png')} style={{width:110, height:120,position:'absolute',bottom:'-10%',right:'35%'}} />
                <Image source={require('../../assets/directorio/Recurso6Pantalla1.png')} style={{width:110, height:120,position:'absolute',bottom:'-10%',right:'0%'}} />
                <Image source={require('../../assets/directorio/Recurso7Pantalla1.png')} style={{width:300, height:165,position:'absolute',top:'20%',left:'8%'}} />
                <View style={styles.container}>
                    <Picker
                        style={{width: 200, height: 50, backgroundColor: 'rgba(24,56,103, 1.0)', 
                            color: '#FFF', }} 
                        itemStyle={{height: 44, right: 50}}
                        selectedValue={this.state.estados}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({estados: (itemValue !== 'TAB'? Alert.alert("Información","Estado no disponible"): itemValue )})
                        }>
                        <Picker.Item label="Seleccione un estado" value="TAB" />
                        <Picker.Item label="Tabasco" value="TAB" />
                        <Picker.Item label="Veracruz" value="VER" />
                        <Picker.Item label="Campeche" value="CAM" />
                        </Picker>
                        
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>{this.props.navigation.navigate('Pantalla2')}}
                        >
                            <Text style={styles.textBoton}>ENVIAR</Text>
                        </TouchableOpacity>
                </View>                
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    },
    picker: {
        backgroundColor: 'red'
    },
    boton: {
        marginTop: 50,
        backgroundColor: 'rgba(24,56,103, 1.0)',
        width: 120,
        height: 40,
        justifyContent: 'center'
    },
    textBoton: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'GothamMedium',
        textAlign: 'center'
    }
})