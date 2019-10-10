import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import Orientation from 'react-native-orientation';

export default class pantalla2 extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        Orientation.lockToPortrait();
    }

    render(){
        return (
            <ImageBackground source={require('../../assets/directorio/pantalla2/fondop2.png')} style={styles.fondoimage} resizeMode={'cover'}>
                <Image source={require('../../assets/directorio/pantalla2/pantalla2r1.png')} style={{position:'absolute', width:105, height:100,left:'40%',top:'-11%'}}/>
                <Image source={require('../../assets/directorio/pantalla2/pantalla2r2.png')} style={{position:'absolute', width:100, height:100, bottom:'30%',left:'-26%'}}/>
                <Image source={require('../../assets/directorio/pantalla2/pantalla2r3.png')} style={{position:'absolute', width:115, height:124, bottom:'-14%',left:'-11%'}}/>
                <Image source={require('../../assets/directorio/pantalla2/pantalla2r4.png')} style={{position:'absolute', width:120, height:120, bottom:'-12%',right:'-15%'}}/>
                <Image source={require('../../assets/inicio.png')} style={{width:90,height:30,position:'absolute',top:'3%',left:'5%'}}/>
                <View style={styles.container}>
                    <View style={styles.containertitulo}>
                        <Text style={styles.texttitulo}>CLASIFICACIONES GENERALES</Text>
                    </View>
                    <View style={styles.clasificaciones}>
                        <TouchableOpacity 
                            style={[styles.boton,{backgroundColor:'#F29B10'}]}
                            onPress={()=>{this.props.navigation.navigate('Pantalla3')}}
                            >
                            <Image source={require('../../assets/directorio/pantalla2/icono1.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>NIVEL ESCOLAR</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#26AD60'}]}>
                            <Image source={require('../../assets/directorio/pantalla2/icono2.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>ESPECIALIDADES</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#8F44AD'}]}>
                            <Image source={require('../../assets/directorio/pantalla2/icono4.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>DEPORTIVAS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#16A086'}]}>
                            <Image source={require('../../assets/directorio/pantalla2/icono5.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>SALUD</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#C30052'}]}>
                            <Image source={require('../../assets/directorio/pantalla2/icono6.png')} style={styles.icono}resizeMode={'contain'}/>
                            <Text style={styles.textboton}>EVENTOS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.boton,{backgroundColor:'#34495E'}]}>
                            <Image source={require('../../assets/directorio/pantalla2/icono7.png')} style={styles.icono} resizeMode={'contain'}/>
                            <Text style={styles.textboton}>PROVEEDURÍA</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
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
        marginBottom:8
    },
    texttitulo:{
        color:'rgba(29,58,108, 1.0)',
        fontFamily:'GothamBold'
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