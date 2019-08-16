import React,{Component} from 'react';
import {View,Image,Text,TextInput,ImageBackground,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            email: 'ykeky@ykeky.com',
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
                <ImageBackground source={require('../assets/fondo2.png')} style={{flex:1}} resizeMode={'cover'}>
                    <View style={styles.container}>
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
                            <TouchableOpacity style={styles.botonIzq}><Text style={{color: 'rgba(2,2,53, 1.0)'}}>¿Olvido su contraseña?</Text></TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.botonIS}
                                // onPress={() => {this.props.navigation.navigate('Home', {email: this.state.email})}}
                                onPress={() => {this.onLoginPressed()}}
                                >
                                    <Text style={styles.textIS}>INICIAR SESIÓN</Text>
                            </TouchableOpacity>
                            <View style={[styles.redesContainer,{marginTop: '5%'}]}>
                                <TouchableOpacity 
                                    style={styles.botonRS}
                                    onPress={() => {this.props.navigation.navigate("Register")}}
                                    >
                                        <Text style={{color: 'rgba(2,2,53, 1.0)'}}>Crea una cuenta</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{color: 'rgba(2,2,53, 1.0)',marginTop:'5%'}}>Inicia sesión con:</Text>
                            <View style={styles.redesContainer}>
                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Facebook aún no disponible")}}
                                >
                                    <Text style={{fontSize: 12, }}><Icon name='facebook-f' size={25} color="black"/>Iniciar sesión con Facebook</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Google aún no disponible")}}
                                >
                                    <Text style={{fontSize: 12,textAlign:'center'}}><Icon name='google' size={25} color="black"/>Iniciar sesión con Google</Text>
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
        // fontFamily: 'Roboto',
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'rgba(2,2,53, 1.0)',
        alignItems: 'flex-end'
    },
    textInput: {
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
        borderRadius: 5
    },
    botonRS : {
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
    textIS: {
        fontSize: 20,
        color: 'rgba(255,255,255,1.0)',
        textAlign: 'center'

    },
    redesContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    }
})