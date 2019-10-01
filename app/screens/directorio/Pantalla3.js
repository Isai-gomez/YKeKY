import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';

export default class Pantalla3 extends Component {
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <ImageBackground source={require('../../assets/directorio/pantalla2/fondop2.png')} style={styles.fondoimage} resizeMode={'cover'}>
                <Image source={require('../../assets/directorio/pantalla3/pantalla3r2.png')} style={{position:'absolute', width:160, height:100,left:'40%',top:'-14.5%'}}/>
                <Image source={require('../../assets/directorio/pantalla3/pantalla3r3.png')} style={{position:'absolute', width:100, height:100, top:'-10%',left:'-20%'}}/>
                <Image source={require('../../assets/directorio/pantalla3/pantalla3r4.png')} style={{position:'absolute', width:98, height:115, bottom:'-10%',left:'-9%'}}/>
                <Image source={require('../../assets/directorio/pantalla3/pantalla3r1.png')} style={{position:'absolute', width:108, height:110, bottom:'-9%',right:'-12%'}}/>
                <Image source={require('../../assets/inicio.png')} style={{width:90,height:30,position:'absolute',top:'6%',left:'5%'}}/>
                <View style={styles.container}>
                    <View style={styles.containertitulo}>
                        <Text style={styles.texttitulo}>NIVELES{"\n"}ESCOLARES</Text>
                    </View>
                    <View style={styles.clasificaciones}>
                        <TouchableOpacity 
                            style={[styles.boton,{backgroundColor:'#2A80B9'}]}
                            onPress={()=>{this.props.navigation.navigate('Pantalla4')}}
                        >
                            <Image source={require('../../assets/directorio/pantalla3/icono2p3.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>UNIVERSIDADES</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#16A086'}]}>
                            <Image source={require('../../assets/directorio/pantalla3/icono1p3.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>PREPARATORIAS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#26AD60'}]}>
                            <Image source={require('../../assets/directorio/pantalla3/icono4p3.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>SECUNDARIAS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#8F44AD'}]}>
                            <Image source={require('../../assets/directorio/pantalla3/icono5p3.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>PRIMARIAS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#F29B10'}]}>
                            <Image source={require('../../assets/directorio/pantalla3/icono5p3_1.png')} style={styles.icono}resizeMode={'contain'}/>
                            <Text style={styles.textboton}>PREESCOLAR</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={[styles.boton,{backgroundColor:'#C30052'}]}>
                            <Image source={require('../../assets/directorio/pantalla3/icono6p3.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>MARTERNAL</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity> */}
                    </View>                 
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    fondoimage:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    containertitulo:{
        marginTop:30,
        marginBottom:20
    },
    texttitulo:{
        textAlign:'center',
        color:'rgba(29,58,108, 1.0)',
        fontFamily:'GothamBold',
        fontSize:20
    },
    clasificaciones:{
        width:'100%',
        alignItems:'center'
    },
    boton:{
        flexDirection:'row',
        height:40,
        width:'80%',
        marginBottom:30,
        alignItems:"center"
    },
    textboton:{
        color:'#fff',
        fontFamily:'GothamBold',
        fontSize:17
    },
    icono: {
        marginRight:'5%',
        marginLeft:'5%',
        width:35,
        height:30
    }



})