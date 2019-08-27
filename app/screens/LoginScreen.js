import React,{Component} from 'react';
import {View,Image,Text,TextInput,ImageBackground,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        // this.storeData();
        // this.getData();
    }

    constructor(){
        super();
        this.state = {
            email: 'Juan@gmail.com',
            password: ''
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

    onLoginPressed = async() => {
        if(this.state.email !== '' && this.state.password !== ''){
            const firstPair = ["isLoggedIn", "1"]
            const secondPair = ["usuario", this.state.email]
            await AsyncStorage.multiSet([firstPair, secondPair])
            console.log('email: ' + this.state.email);
            this.props.navigation.navigate('Home');
        } else {
            Alert.alert("Email y/o Password son requeridos")
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fondo1.png')} style={{flex:1}} resizeMode={'cover'} >
                <ImageBackground  style={{flex:1}} resizeMode={'cover'}>
                    <View style={styles.container}>
                        <Image source={require('../assets/Recurso1.1.png')} style={{width:135, height:70,position:'absolute',top:'0%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso2.2.png')} style={{width:176, height:60,position:'absolute',top:'0%',right:'0%'}}/>
                        <Image source={require('../assets/Recurso4.4.png')} style={{width:130, height:70,position:'absolute',bottom:'0%',left:'0%'}}/>
                        <Image source={require('../assets/Recurso3.3.png')} style={{width:130, height:70,position:'absolute',bottom:'0%',right:'0%'}}/>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/inicio.png')} style={styles.logo} />
                            <View style={styles.title}>
                                <Text style={styles.titulo}>INICIAR SESIÓN</Text>
                            </View>
                        </View>                       
                        <View style={styles.form}> 
                            <TextInput
                                style={styles.textInput} 
                                value={this.state.email}
                                placeholder={'Nombre de Usuario'}
                                placeholderTextColor={'rgba(2,2,53, 1.0)'}
                                onChangeText={(email) => {this.setState({email: email})}}
                            />
                            {/* <Icon name="contact" size={30} color="#900" />; */}
                            <TextInput
                                style={styles.textInput} 
                                placeholder={'Contraseña'}
                                placeholderTextColor={'rgba(2,2,53, 1.0)'}
                                secureTextEntry={true}
                                onChangeText={(password) => {this.setState({password: password})}}
                            />
                            <TouchableOpacity 
                            style={styles.botonIzq}
                            onPress={()=>{this.props.navigation.navigate('Recuperar')}}
                            >
                                <Text style={{color: 'rgba(2,2,53, 1.0)',fontFamily:'GothamBook'}}>¿Olvido su contraseña?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.botonIS}
                                // onPress={() => {this.props.navigation.navigate('Home', {email: this.state.email})}}
                                onPress={() => {this.onLoginPressed()}}
                                >
                                    <Text style={styles.textIS}>INICIA SESIÓN</Text>
                            </TouchableOpacity>
                            <View style={[styles.redesContainer,{marginTop: '5%'}]}>
                                <TouchableOpacity 
                                    style={styles.botonRS}
                                    onPress={() => {this.props.navigation.navigate("Register")}}
                                    >
                                        <Text style={{fontFamily: 'GothamBold',color:'rgba(2,2,53, 1.0)',fontSize:15}}>REGÍSTRATE</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{color: 'rgba(2,2,53, 1.0)',marginTop:'5%'}}>Inicia sesión con:</Text>
                            <View style={styles.redesContainer}>
                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Facebook aún no disponible")}}
                                >
                                    <Text style={{fontSize: 12,fontFamily:'GothamBook'}}><Icon name='facebook' size={25} color="black"/>Regístrate con Facebook</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Google aún no disponible")}}
                                >
                                    <Text style={{fontSize: 12,textAlign:'center',fontFamily:'GothamBook'}}><Icon name='google' size={25} color="black"/>Regístrate con Google</Text>
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
        color: 'rgba(2,2,53, 1.0)',
        alignItems: 'flex-end'
    },
    textInput: {
        fontFamily:'GothamBook',
        width: '80%',
        borderBottomColor: 'rgba(2,2,53, 1.0)',
        borderBottomWidth: 2
    },
    botonR: {
        borderRadius: 5,
        borderWidth: 2,
        padding: 0,
        borderColor: 'rgba(2,2,53, 1.0)',
        marginHorizontal: 1,
        width: '49.5%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botonIzq: {
        right: '20%'
    },
    botonIS: {
        marginTop: '5%',
        backgroundColor: 'rgba(2,2,53, 1.0)',
        width: '80%',
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        alignItems:'center'
    },
    botonRS : {
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
    textIS: {
        fontFamily: 'GothamBold',
        fontSize: 15,
        color: 'rgba(255,255,255,1.0)',
        textAlign: 'center',
    },
    redesContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    }
})