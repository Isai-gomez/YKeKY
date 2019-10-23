import React, { Component } from 'react';
import {ImageBackground,Image,View,StyleSheet,Text,Picker,TouchableOpacity,Alert} from 'react-native';
import Orientation from 'react-native-orientation';

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

    componentDidMount(){
        Orientation.lockToPortrait();
    }

    seleccionarEstado(){
        if(this.state.estados !== "TAB"){
            Alert.alert("Instrucción", `Por favor seleccione otro estado ${this.state.estados} aún no está disponible.`)
        } else if(this.state.estados === "Seleccione"){
            Alert.alert("intrucción", "Por favor seleccione un estado para continuar")
        } else{
            this.props.navigation.navigate('Pantalla2')
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
                <Image source={require('../../assets/directorio/Recurso7Pantalla1.png')} style={{width:300, height:165,position:'absolute',top:'20%',left:'4%'}} />
                <View style={styles.container}>
                    <Picker
                        style={{width: 200, height: 50, backgroundColor: 'rgba(24,56,103, 1.0)', 
                            color: '#FFF', }} 
                        itemStyle={{height: 44, right: 50}}
                        mode={'dropdown'}
                        selectedValue={this.state.estados}
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({estados: itemValue})
                            // this.setState({estados: (itemValue !== 'TAB'? Alert.alert("Información","Estado no disponible"): itemValue )})
                        }
                        }>
                        <Picker.Item label="Seleccione un estado" value="Seleccione" />
                        <Picker.Item label="Tabasco" value="TAB" />
                        <Picker.Item label="AguasCalientes" value="AGS" />
                        <Picker.Item label="Baja California" value="BCA" />
                        <Picker.Item label="Baja California Sur" value="BCS" />
                        <Picker.Item label="Campeche" value="CAM" />
                        <Picker.Item label="Coahuila" value="COA" />
                        <Picker.Item label="Colima" value="COL" />
                        <Picker.Item label="Chiapas" value="CHS" />
                        <Picker.Item label="Chihuahua" value="CHI" />
                        <Picker.Item label="Ciudad de México" value="CMX" />
                        <Picker.Item label="Durango" value="DUR" />
                        <Picker.Item label="Guanajuato" value="GUA" />
                        <Picker.Item label="Guerrero" value="GUE" />
                        <Picker.Item label="Hidalgo" value="HID" />
                        <Picker.Item label="Jalisco" value="JAL" />
                        <Picker.Item label="México" value="MXN" />
                        <Picker.Item label="Michoacán" value="MIC" />
                        <Picker.Item label="Morelos" value="MOR" />
                        <Picker.Item label="Nayarit" value="NAY" />
                        <Picker.Item label="Nuevo León" value="NUL" />
                        <Picker.Item label="Oaxaca" value="OAX" />
                        <Picker.Item label="Puebla" value="PUE" />
                        <Picker.Item label="Querétaro" value="QUE" />
                        <Picker.Item label="Quintana Roo" value="QUI" />
                        <Picker.Item label="San Luis Potosí" value="SLP" />
                        <Picker.Item label="Sinaloa" value="SIN" />
                        <Picker.Item label="Sonora" value="SON" />
                        <Picker.Item label="Tamaulipas" value="TAM" />
                        <Picker.Item label="Tlaxcala" value="TLA" />
                        <Picker.Item label="Veracruz" value="VER" />
                        <Picker.Item label="Yucatán" value="YUC" />
                        <Picker.Item label="Zacatecas" value="ZAC" />
                        </Picker>
                        
                        <TouchableOpacity 
                            style={styles.boton}
                            onPress={()=>{this.seleccionarEstado()}}
                        >
                            <Text style={styles.textBoton}>ENTRAR</Text>
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