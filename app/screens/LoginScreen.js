import React,{Component} from 'react';
import {View,Image,Text,TextInput,ImageBackground,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        this.storeData();
        this.getData();
    }

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    storeData = async () => {
        try {
          await AsyncStorage.setItem('@storage_Key', 'stored value')
        } catch (e) {
          Alert.alert("Error en Store")
        }
    }

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            Alert.alert("Data in storage: " + value)
          }
        } catch(e) {
          Alert.alert("No hay data in storage")
        }
      }

    // onLoginPressed = () => {
    //     try{

    //     }catch(error){
    //         console.warn("Error: ", error)
    //     }
    // }

    render() {
        return (
            <ImageBackground source={require('../assets/screen2.png')} style={{width:'100%',height:'100%'}} >
                <ImageBackground source={require('../assets/screen1.png')} style={{width:'100%',height:'100%'}}>
                    <View style={styles.container}>
                        <View style={styles.title}>
                            <Text style={styles.titulo}>INICIAR SESIÓN</Text>
                        </View>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/logo-ultimate01.png')} style={styles.logo} />
                        </View>
                        <View style={styles.form}>
                            
                            <TextInput
                                style={styles.textInput} 
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
                                onPress={() => {this.props.navigation.navigate('Home')}}
                                >
                                    <Text style={styles.textIS}>INICIAR SESIÓN</Text>
                            </TouchableOpacity>
                            <Text style={{color: 'rgba(2,2,53, 1.0)',marginTop:'5%'}}>Inicia sesión con:</Text>
                            <View style={styles.redesContainer}>
                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Facebook aún no disponible")}}
                                >
                                    <Text style={{fontSize: 20, textAlign: 'center'}}><Icon name='facebook-f' size={30} color="black"/></Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.botonR}
                                    onPress={() => {Alert.alert("Google aún no disponible")}}
                                >
                                    <Text style={{fontSize: 20,textAlign:'center'}}><Icon name='google' size={30} color="black"/></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.redesContainer,{marginTop: '5%'}]}>
                                <Text>¿No te has registado? </Text>
                                <TouchableOpacity 
                                    style={styles.boton}
                                    onPress={() => {this.props.navigation.navigate("Register")}}
                                    >
                                        <Text style={{color: 'rgba(2,2,53, 1.0)'}}>Crea una cuenta</Text>
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
        flex: 0.4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'blue',
    },
    logoContainer: {
        flex: 0.2,
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
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    titulo: {
        // fontFamily: 'Roboto',
        fontSize: 30,
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
        borderRadius: 100,
        borderWidth: 2,
        padding: 0,
        borderColor: 'rgba(2,2,53, 1.0)',
        marginHorizontal: 10,
        width: 40,
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
        borderRadius: 30
    },
    textIS: {
        fontSize: 20,
        color: 'rgba(255,255,255,1.0)',
        textAlign: 'center'

    },
    redesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})