import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';

export default class pantalla4 extends Component {
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <ImageBackground source={require('../../assets/directorio/pantalla2/fondop2.png')} style={styles.fondoimage} resizeMode={'cover'}>
                <Image source={require('../../assets/directorio/pantalla4/recurso3p4.png')} style={{position:'absolute', width:120, height:120, right:'-12%',top:'-14.5%'}}/>
                <Image source={require('../../assets/directorio/pantalla4/recurso2p4.png')} style={{position:'absolute', width:100, height:100, top:'-10%',left:'40%'}}/>
                <Image source={require('../../assets/directorio/pantalla4/recurso1p4.png')} style={{position:'absolute', width:125, height:125, top:'-17%',left:'-9%'}}/>
                <Image source={require('../../assets/directorio/pantalla4/recurso4p4.png')} style={{position:'absolute', width:108, height:110, bottom:'-11%',right:'-12%'}}/>
                <Image source={require('../../assets/directorio/pantalla4/recurso5p4.png')} style={{position:'absolute', width:108, height:110, bottom:'-9%',left:'-0%'}}/>
                <View style={styles.container}>
                    <View style={styles.containertitulo}>
                        <Image source={require('../../assets/directorio/pantalla4/logop4.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.clasificaciones}>
                    <TouchableOpacity 
                            style={[styles.boton,{backgroundColor:'#16A086'}]}
                            onPress={()=>{this.props.navigation.navigate('Pantalla5',{tipoUniversidad: 2})}}
                            >
                            <Text style={styles.textboton}>PRIVADAS</Text>
                            <Image source={require('../../assets/directorio/pantalla2/icono3.png')} style={{width:15,height:15,right:'10%',position:'absolute'}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.boton,{backgroundColor:'#C30052'}]}
                            onPress={()=>{this.props.navigation.navigate('Pantalla5', {tipoUniversidad: 1})}}
                            >
                            <Text style={styles.textboton}>PÚBLICAS</Text>
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
        marginTop:200,
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
        alignItems:'center',
        height:'80%'
    },
    boton:{
        flexDirection:'row',
        height:40,
        width:'80%',
        marginBottom:30,
        alignItems:"center"
    },
    textboton:{
        marginLeft:'10%',
        color:'#fff',
        fontFamily:'GothamBold',
        fontSize:17
    },
    icono: {
        marginRight:'5%',
        marginLeft:'5%',
        width:35,
        height:30
    },
    logo:{
        width:230,
        height:80
    }
})