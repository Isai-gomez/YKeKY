import React,{Component} from 'react';
import {View,ImageBackground,TextInput,TouchableOpacity,StyleSheet,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground source={require('../assets/fondo1.png')} style={{width:'100%', height:'100%',resizeMode: 'cover'}}>
                <ImageBackground source={require('../assets/fondo2.png')} style={{width:'100%', height:'100%',resizeMode: 'cover'}}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/inicio.png')} style={styles.logo} />
                            <View style={styles.tituloContainer}>
                                <Text style={styles.titulo}>
                                    Resgistrate
                                </Text>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <TextInput
                                placeholder='Nombre'
                                placeholderTextColor= 'rgba(2,2,53, 0.5)'
                                style={styles.textInput}
                            />
                            <TextInput
                                placeholder='Apellido'
                                placeholderTextColor= 'rgba(2,2,53, 0.5)'
                                style={styles.textInput}
                            />                                
                            <TextInput
                                 placeholder='Correo de Email'
                                 placeholderTextColor= 'rgba(2,2,53, 0.5)'
                                 style={styles.textInput}
                            />
                            <TextInput
                                 placeholder='Contraseña'
                                 placeholderTextColor= 'rgba(2,2,53, 0.5)'
                                 style={styles.textInput}
                            />
                            <TouchableOpacity style={styles.botonI}><Text style={styles.textBoton}>REGISTRARSE</Text></TouchableOpacity>
                            <View style={styles.containerR}> 
                                <TouchableOpacity 
                                    style={styles.boton}
                                    onPress={() => {this.props.navigation.navigate("Login")}}
                                >
                                    <Text style={styles.textSesion}> Inicia Sesión</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerR}>
                                <TouchableOpacity style={styles.botonesR}><Text style={{fontSize: 12,textAlign:'center'}}><Icon name='facebook-f' size={25} color="black"/>Iniciar sesión con Facebook</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.botonesR}><Text style={{fontSize: 12,textAlign:'center'}}><Icon name='google' size={25} color="black"/>Iniciar sesión con Google</Text></TouchableOpacity>
                            </View>
                        </View>                        
                    </View>
                </ImageBackground> 
            </ImageBackground>
        );
    }
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    logoContainer: {
        margin:0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain'
    },
    form: {
        flex:2,
        alignItems: 'center'
    },
    tituloContainer:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    titulo: {
        // fontFamily: 'Roboto',
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'rgba(2,2,53, 1.0)'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'rgba(2,2,53, 1.0)',
        borderBottomWidth: 2
    },
    botonI: {
        marginTop:'5%',
        alignItems: 'center',
        width:'80%',
        backgroundColor:'rgba(2,2,53, 1.0)',
        borderRadius: 5
    },
    textBoton:{
        color: 'white',
        fontSize: 20
    },
    containerR: {
        marginTop:'3%',
        flexDirection: 'row',
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    },
    botonesR: {
        borderRadius: 5,
        borderWidth: 2 ,
        width:'49.5%',
        borderColor: 'rgba(2,2,53, 1.0)',
        marginHorizontal: 1
    },
    boton:{
        borderRadius: 5,
        borderWidth: 2 ,
        width:'49.5%',
        height:35,
        borderColor: 'rgba(2,2,53, 1.0)',
    },
    textSesion:{
        color: 'rgba(2,2,53, 1.0)'
    }
 })