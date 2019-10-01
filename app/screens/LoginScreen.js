import React,{Component} from 'react';
import {View,Image,Text,TextInput,ImageBackground,StyleSheet,TouchableOpacity,Alert, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import  {LoginManager} from 'react-native-fbsdk'
var {height, width} = Dimensions.get('window');

const url = 'http://3.15.183.131:3001/api/users/auth/';
const urlLocal = 'http://192.168.1.65:3001/api/users/auth/';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        // this.storeData();
        // this.getData();
    }

    async loginFacebook() {
        try {
            let result = await LoginManager.logInWithPermissions(['public_profile'])
            if (result.isCancelled){
                alert('Login was cancelled');
            } else {
                alert('Login was successful with permissions:' + JSON.stringify(result));
                console.warn("Result",result)
            }
        } catch(error){
            alert('login failed with error:'+ error)
        }
    }

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: '',
            checked:true,
        }
    }

    storeData = async (email) => {
        try {
          await AsyncStorage.setItem('email', email);
          this.getData();
        } catch (e) {
          Alert.alert("Error en Store")
        }
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('email')
          if(value !== null) {
            Alert.alert("Data in storage: " + value)
          }
        } catch(e) {
          Alert.alert("No hay data in storage")
        }
      }

    // onLoginPressed = async() => {
    //     if(this.state.email !== '' && this.state.password !== ''){
    //         const firstPair = ["isLoggedIn", "1"]
    //         const secondPair = ["usuario", this.state.email]
    //         await AsyncStorage.multiSet([firstPair, secondPair])
    //         console.log('email: ' + this.state.email);
    //         this.props.navigation.navigate('DashboardScreen');
    //     } else {
    //         Alert.alert("Email y/o Password son requeridos")
    //     }
    // }

    async onLoginPressed(){
        axios.post(url,{
            username: this.state.email,
            password: this.state.password
        }).then(response =>{
            let res = response;
            if (response.status >= 200 && response.status < 300){
                console.warn('Token is: ', res.data.id);
                this.setState({error: ""});
                const firstPair = ["isLoggedIn", "1"]
                const secondPair = ["usuario", this.state.email]
                AsyncStorage.multiSet([firstPair, secondPair])
                console.log('email: ' + this.state.email);
                this.props.navigation.navigate('DashboardScreen');
            }else{
                let error = res;
                throw error
            }
        }).catch(error => {
            //console.warn("error: " + error);
            this.setState({error});
            Alert.alert("Advertencia!", error.response.data.error.message);
        })
    }

    oncheked = () => {
        this.setState({checked:!this.state.checked});
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fondo1.png')} style={{width: width, height: height}} resizeMode={'cover'} >
                <ImageBackground  style={{flex:1}} resizeMode={'cover'}>
                <Image source={require('../assets/Recurso1.1.png')} style={{width:135, height:70,position:'absolute',top:'0%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso2.2.png')} style={{width:176, height:60,position:'absolute',top:'0%',right:'0%'}}/>
                        <Image source={require('../assets/Recurso4.4.png')} style={{width:180, height:100,position:'absolute',bottom:'-3%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso3.3.png')} style={{width:137, height:80,position:'absolute',bottom:'-1%',right:'0%'}}/>
                    <View style={styles.container}>
                        <Image source={require('../assets/Recurso1.1.png')} style={{width:135, height:70,position:'absolute',top:'0%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso2.2.png')} style={{width:176, height:60,position:'absolute',top:'0%',right:'0%'}}/>
                        <Image source={require('../assets/Recurso4.4.png')} style={{width:180, height:100,position:'absolute',bottom:'-3%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso3.3.png')} style={{width:137, height:80,position:'absolute',bottom:'-1%',right:'0%'}}/>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/inicio.png')} style={styles.logo} />
                            <View style={styles.title}>
                                <Text style={styles.titulo}>INICIAR SESIÓN</Text>
                            </View>
                        </View>                       
                        <View style={styles.form}> 
                            <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:-2,paddingBottom:5}}>
                                        <Image source={require('../assets/icolog.png')} style={{width:20, height:26,}}/>
                                </View>
                                <TextInput
                                    style={styles.textInput} 
                                    value={this.state.email}
                                    placeholder={'Nombre de Usuario'}
                                    placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                    onChangeText={(email) => {this.setState({email: email})}}
                                />
                            </View>
                            <View style={{flexDirection:'row', width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                                <View style={{borderBottomWidth:2,borderBottomColor: 'rgba(29,58,108, 1.0)',marginBottom:-2,paddingBottom:5}}>
                                    <Image source={require('../assets/icocontra.png')} style={{width:20, height:28,}}/>
                                </View>
                                <TextInput
                                    style={styles.textInput} 
                                    placeholder={'Contraseña'}
                                    placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                    secureTextEntry={true}
                                    onChangeText={(password) => {this.setState({password: password})}}
                                /> 
                            </View>
                            <View style={styles.extra}>                          
                                <TouchableOpacity 
                                style={styles.botonIzq}
                                onPress={()=>{this.props.navigation.navigate('Recuperar')}}
                                >
                                    <Text style={{color: 'rgba(29,58,108, 1.0)',fontFamily:'GothamBold', fontSize:9}}>RECUPERAR CONTRASEÑA</Text>
                                </TouchableOpacity>   
                                <CheckBox
                                    title='RECORDARME'
                                    checked={this.state.checked}
                                    onPress={this.oncheked}
                                    checkedIcon={<Image style={{width:25,height:25}} source={require('../assets/checklog1.png')} />}
                                    uncheckedIcon={<Image style={{width:25,height:25}} source={require('../assets/checklog.png')} />}
                                    containerStyle={styles.CheckBox}
                                    textStyle={styles.checktext}
                                />
                            </View>                      
                            <TouchableOpacity 
                                style={styles.botonIS}
                                // onPress={() => {this.props.navigation.navigate('Home', {email: this.state.email})}}
                                onPress={() => {this.onLoginPressed()}}
                                >
                                    <Text style={styles.textIS}>INICIA SESIÓN</Text>
                            </TouchableOpacity>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.gradient}>
                                <TouchableOpacity 
                                    style={styles.botonRS}
                                    onPress={() => {this.props.navigation.navigate("Register")}}
                                    >   
                                        <Text style={{fontFamily: 'GothamBold',color:'rgba(29,58,108, 1.0)',fontSize:15}}>REGÍSTRATE</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={styles.redesContainer}>
                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={this.loginFacebook}
                                >  
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:25,height:25}} source={require('../assets/icoface.png')}/>
                                        <Text style={{fontSize: 12,fontFamily:'GothamBook',color:'rgba(29,58,108, 1.0)'}}> Regístrate con Facebook</Text>
                                    </View> 
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Google aún no disponible")}}
                                >  
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:25,height:25}} source={require('../assets/icogoogle.png')}/>
                                        <Text style={{fontSize: 12,textAlign:'center',fontFamily:'GothamBook',color:'rgba(29,58,108, 1.0)'}}> Regístrate con Google</Text>
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
        width: width,
        height: height
    },
    title:{
        flex: 0.3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'blue',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain'
    },
    form: {
        flex: 2,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    titulo: {
        fontFamily: 'GothamBold',
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'rgba(29,58,108, 1.0)',
        alignItems: 'flex-end'
    },
    textInput: {
        fontFamily:'GothamBook',
        width: '70%',
        borderBottomColor: 'rgba(29,58,108, 1.0)',
        borderBottomWidth: 2,
        marginBottom:-2
    },
    botonR: {
        borderRadius: 5,
        borderWidth: 2,
        padding: 0,
        marginBottom:5,
        borderColor: 'rgba(29,58,108, 1.0)',
        marginHorizontal: 1,
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonIzq: {
        height:'60%',
        width:'52%',
        marginTop:7,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(29,58,108, 0.5)',
        padding:2,
    },
    botonIS: {
        margin:5,
        backgroundColor: 'rgba(29,58,108, 1.0)',
        width: '80%',
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        alignItems:'center'
    },
    botonRS : {
        backgroundColor:'transparent',
        // borderRadius: 5,
        // borderWidth: 2,
        padding: 0,
        // borderColor: '#ffcf24',
        marginHorizontal: 1,
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIS: {
        fontFamily: 'GothamBold',
        fontSize: 15,
        color: 'rgba(255,255,255,1.0)',
        textAlign: 'center',
    },
    redesContainer:{
        marginTop:'5%',
        flexDirection: 'row',
        flexWrap:'wrap',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    extra:{
        display:'flex',width:'80%', flexDirection:'row',
    },
    CheckBox:{
        backgroundColor:'transparent',
        width:'42%',
        height:10
      
        
    },
    checktext:{
        color: 'rgba(29,58,108, 1.0)',
        fontFamily:'GothamBold', 
        fontSize:9
    },
    gradient:{
        borderRadius: 5,
        width: '80%',
    }
})