import React,{Component} from 'react';
import {View,ImageBackground,TextInput,TouchableOpacity,StyleSheet,Text,Image,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const url = 'http://18.225.10.133:3001/api/users/'

export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            error: []
        }
    }
    


    async onRegisterPressed(){
        axios.post(url,{
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.email,
            email: this.state.email,
            password: this.state.password,
        }).then((response) => {
            let res = response;
            if(response.status >= 200 && response.status < 300){
                this.setState({error: ""});
                Alert.alert("Intrucciones", "Verifique su bandeja de correo")
            }else{
                let error = res;
                throw error
            }
        }).catch(error => {
            console.warn("Error: " + error);
            this.setState({error:error})
            Alert.alert("Error", "Error con el registro")
        })
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fondo1.png')} style={{width:'100%', height:'100%',resizeMode: 'cover'}}>
                <ImageBackground style={{width:'100%', height:'100%',resizeMode: 'cover'}}>
                    <Image source={require('../assets/Recurso1.1.png')} style={{width:135, height:70,position:'absolute',top:'0%',left:'0%'}}/>
                    <Image source={require('../assets/Recurso2.2.png')} style={{width:176, height:60,position:'absolute',top:'0%',right:'0%'}}/>
                    <Image source={require('../assets/Recurso4.4.png')} style={{width:130, height:70,position:'absolute',bottom:'0%',left:'0%'}}/>
                    <Image source={require('../assets/Recurso3.3.png')} style={{width:130, height:70,position:'absolute',bottom:'0%',right:'0%'}}/>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/inicio.png')} style={styles.logo} />
                            <View style={styles.tituloContainer}>
                                <Text style={styles.titulo}>
                                    REGISTRO
                                </Text>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <TextInput
                                placeholder='Nombre del usuario'
                                placeholderTextColor='rgba(29,58,108, 1.0)'
                                style={styles.textInput}
                                onChangeText={(first_name) => {this.setState({first_name})}}
                            />
                            <TextInput
                                placeholder='Apellido del usuario'
                                placeholderTextColor='rgba(29,58,108, 1.0)'
                                style={styles.textInput}
                                onChangeText={(last_name) => {this.setState({last_name})}}
                            />                                
                            <TextInput
                                placeholder='Correo de Email'
                                placeholderTextColor='rgba(29,58,108, 1.0)'
                                style={styles.textInput}
                                onChangeText={(email) => {this.setState({email})}}
                            />
                            <TextInput
                                placeholder='Contraseña'
                                placeholderTextColor='rgba(29,58,108, 1.0)'
                                style={styles.textInput}
                                onChangeText={(password) => {this.setState({password})}} 
                            />
                            <TouchableOpacity 
                                style={styles.botonI}
                                onPress={() => {this.onRegisterPressed()}}
                                >
                                <Text style={styles.textBoton}>REGÍSTRATE</Text>
                            </TouchableOpacity>
                            <View style={styles.containerR}> 
                                <TouchableOpacity 
                                    style={styles.boton}
                                    onPress={() => {this.props.navigation.navigate("Login")}}
                                >
                                    <Text style={styles.textSesion}>INICIA SESIÓN</Text>
                                </TouchableOpacity>
                            </View>
                                <TouchableOpacity style={styles.botonesR}><Text style={{fontSize: 12,textAlign:'center',fontFamily: 'GothamBook',}}><Icon name='facebook' size={25} color="black"/>Regístrate con Facebook</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.botonesR}><Text style={{fontSize: 12,textAlign:'center',fontFamily: 'GothamBook',}}><Icon name='google' size={25} color="black"/>Regístrate con Google</Text></TouchableOpacity>
                            {/* <View style={styles.containerR}>
                                
                            </View> */}
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
        flex: 0.7,
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
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    tituloContainer:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontFamily: 'GothamBold',
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'rgba(29,58,108, 1.0)'
    },
    textInput: {
        fontFamily: 'GothamBook',
        width: '80%',
        borderBottomColor: 'rgba(29,58,108, 1.0)',
        borderBottomWidth: 2
    },
    botonI: {
        backgroundColor:'rgba(29,58,108, 1.0)',
        borderRadius: 5,
        borderWidth: 2,
        padding: 0,
        borderColor: 'rgba(29,58,108, 1.0)',
        marginHorizontal: 1,
        width: '80%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '7%'
    },
    textBoton:{
        fontFamily: 'GothamBold',
        color: 'white',
        fontSize: 15,
    },
    containerR: {
        marginTop:'3%',
        flexDirection: 'column',
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    },
    botonesR: {
        borderRadius: 5,
        borderWidth: 2 ,
        width:'80%',
        borderColor: 'rgba(29,58,108, 1.0)',
        marginHorizontal: 1,
        marginTop: '3%'
    },
    boton:{
        backgroundColor:'#ffcf24',
        borderRadius: 5,
        borderWidth: 2,
        padding: 0,
        borderColor: '#ffcf24',
        marginHorizontal: 1,
        width: '80%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSesion:{
        fontFamily: 'GothamBold',
        color: 'rgba(29,58,108, 1.0)',
        fontSize: 15
    }
 })