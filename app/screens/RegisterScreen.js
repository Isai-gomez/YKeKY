import React,{Component} from 'react';
import {View,ImageBackground,TextInput,TouchableOpacity,StyleSheet,Text,Image,Alert,Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import Orientation from 'react-native-orientation';

var {width,height} = Dimensions.get('window');
const url = 'http://3.15.183.131:3001/api/users'

export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        Orientation.lockToPortrait();
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
            <ImageBackground source={require('../assets/fondo1.png')} style={{width:width, height:height}} resizeMode={'cover'} >
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
                            <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:0,paddingBottom:5}}>
                                        <Image source={require('../assets/icolog.png')} style={{width:20, height:25,}}/>
                                </View>
                            <TextInput
                                placeholder='Nombre del usuario'
                                placeholderTextColor='rgba(29,58,108, 1.0)'
                                style={styles.textInput}
                                onChangeText={(first_name) => {this.setState({first_name})}}
                            />
                            </View>
                            <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:0,paddingBottom:5}}>
                                    <Image source={require('../assets/icocontra.png')} style={{width:20, height:28,}}/>
                                </View>  
                                <TextInput
                                    placeholder='Apellido'
                                    placeholderTextColor= 'rgba(29,58,108, 1.0)'
                                    style={styles.textInput}
                                    onChangeText={(last_name) => {this.setState({last_name})}}
                                />
                            </View>   
                            <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}> 
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:0,paddingBottom:5}}>
                                    <Image source={require('../assets/icocorr.png')} style={{width:20, height:16,}}/>
                                </View>                          
                                <TextInput
                                    placeholder='Correo de Email'
                                    placeholderTextColor= 'rgba(29,58,108, 1.0)'
                                    style={styles.textInput}
                                    onChangeText={(email) => {this.setState({email})}}
                                />
                            </View>  
                            <View  style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:0,paddingBottom:5}}>
                                    <Image source={require('../assets/icocontra.png')} style={{width:20, height:28,}}/>
                                </View>
                                <TextInput
                                    placeholder='Contraseña'
                                    placeholderTextColor= 'rgba(29,58,108, 1.0)'
                                    style={styles.textInput}
                                    onChangeText={(password) => {this.setState({password})}}
                                />
                            </View>
                            <TouchableOpacity 
                                style={styles.botonI}
                                onPress={()=>{this.onRegisterPressed()}}
                            >
                                <Text style={styles.textBoton}>REGÍSTRATE</Text>
                                </TouchableOpacity>
                            <View style={styles.containerR}> 
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.gradient}>
                                    <TouchableOpacity 
                                        style={styles.boton}
                                        onPress={() => {this.props.navigation.navigate("Login")}}
                                    >
                                        <Text style={styles.textSesion}>INICIA SESIÓN</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View style={styles.containerR}>
                                <TouchableOpacity style={styles.botonesR}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:25,height:25}} source={require('../assets/icoface.png')}/>
                                        <Text style={{fontSize: 12,textAlign:'center',fontFamily: 'GothamBook',color:'rgba(29,58,108, 1.0)'}}>Regístrate con Facebook</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botonesR}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:25,height:25}} source={require('../assets/icogoogle.png')}/>
                                        <Text style={{fontSize: 12,textAlign:'center',fontFamily: 'GothamBook',color:'rgba(29,58,108, 1.0)'}}>Regístrate con Google</Text>
                                    </View>
                                </TouchableOpacity>
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
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        margin:0
    },
    form: {
        flex:2,
        alignItems: 'center',
        marginTop:-40
    },
    tituloContainer:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop:-30
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
        marginTop:3,
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
        flexWrap:'wrap',
        marginTop:3,
        flexDirection: 'row',
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    },
    botonesR: {
        alignItems:'center',
        height:35,
        borderRadius: 5,
        borderWidth: 2 ,
        width:'80%',
        borderColor: 'rgba(29,58,108, 1.0)',
        marginBottom:2

    },
    boton:{
        backgroundColor:'transparent',
        borderRadius: 5,
        // borderWidth: 2,
        padding: 0,
        // borderColor: '#ffcf24',
        marginHorizontal: 1,
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSesion:{
        fontFamily: 'GothamBold',
        color: 'rgba(29,58,108, 1.0)',
        fontSize: 15
    },
    gradient:{
        borderRadius: 5,
        width: '80%',
    }
 })