import React from 'react';
import {View,Text,ImageBackground, StyleSheet, Dimensions,Image,TouchableOpacity,TextInput,Alert, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class EditProfile extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(){
        super();
        this.state = {
            nombreUser: '',
            apellidoUser: '',
            edadUser: '',
            sexoUser: '',
            estadoUser: '',
            ciudadUser: '',
            idUser: '',
            tokenUser: '',
            emailUser: '',
            user:'',
            password: '',
            verified:''
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = async() =>{
        try {
            const TokenUser = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userid');
            this.setState({
                tokenUser: TokenUser,
                idUser: userId
            });
            console.warn("Data Store Token: ", TokenUser);
            console.warn("Data Store Id Usuario: ", userId);
            this.makeRemoteRequestProfile(this.state.idUser);
        } catch(error) {
            console.warn("Error");
        }
    }

    makeRemoteRequestProfile = (id) => {
        const url = `http://3.17.60.127:3001/api/users/${id}`;

        fetch(url)
            .then((response) => response.json())
            .then((response)=> {
                console.warn("Response: ", response)
                this.setState({
                    nombreUser: response.first_name,
                    apellidoUser: response.last_name,
                    edadUser: response.age,
                    sexoUser: response.gender,
                    emailUser:response.email,
                    verified: response.emailVerified,
                    user:response.username,
                    password: response.password
                  });
            })
            .catch(error => {
                console.warn("Error: ", error)
            });
    }

    async update(id){
        const link = `http://3.17.60.127:3001/api/users/${id}?access_token=${this.state.tokenUser}`;
        axios.put (link, {
                first_name:this.state.nombreUser,
                last_name:this.state.apellidoUser,
                age: this.state.edadUser,
                username: this.state.user,
                gender:this.state.sexoUser,
                email: this.state.emailUser,
                emailVerified:this.state.verified,
                // password: this.state.password
          },    {headers: {'Accept': 'application/json',"Content-type": "application/json",
        }})
          .then((response) => {
            Alert.alert(
                'Perfil',
                'Perfil actualizado exitosamente',
                [{
                    text: 'OK', 
                    onPress :() => {this.props.navigation.navigate("DashboardScreen")}
                }]
            );
            console.log(response); 
          })
          .catch((error) => {
              if(error.request = 'code 422'){
                Alert.alert("ingrese contraseña por favor")
              }
              console.warn("Error: ", error);
              console.warn(error.request);
          });                
    } 


    render(){
        return(
        <ImageBackground source={require('../assets/profile/editProfile/bgEprofile.png')} style={styles.fondo} resizeMode={'cover'}>
                {/* recursos inferiores */}
                  <Image source={require('../assets/profile/editProfile/Recurso1ep.png')} style={{width:100,height:100, position:'absolute',bottom:'-5%',right:'-10%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso2ep.png')} style={{width:140,height:150, position:'absolute',bottom:'-20%',right:'25%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso3ep.png')} style={{width:100,height:100, position:'absolute',bottom:'-10%',left:'27%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso4ep.png')} style={{width:150,height:150, position:'absolute',bottom:'-5%',left:'-15%'}}/>
                  {/* recursos superiores */}
                  <Image source={require('../assets/profile/editProfile/Recurso5ep.png')} style={{width:150, height:150,position:'absolute',top:'-15%',right:'-5%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso6ep.png')} style={{width:100, height:100,position:'absolute',top:'-12%',right:'30%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso7ep.png')} style={{width:100, height:110,position:'absolute',top:'-15%',left:'17%'}}/>
                  <Image source={require('../assets/profile/editProfile/Recurso8ep.png')} style={{width:100, height:100,position:'absolute',top:'-3%',left:'-15%'}}/>
                <View style={styles.container}>
                {/* <View style={styles.topContainer}> */}
                        <View style={styles.fotoPerfilContainer}>
                            <TouchableOpacity 
                                style={styles.fotoTouchable}
                            >
                                <Image source={require('../assets/perfil.png')} resizeMode={'contain'} style={{width:120, height: 120, borderRadius: 100}} />
                            </TouchableOpacity>
                            <Text 
                                style={{color: '#FFD549', marginTop: 5,fontWeight: 'bold'}}
                                onPress={()=>this.props.navigation.navigate('EditProfile')}
                                >
                                Cambiar foto de perfil
                            </Text>
                        </View>
                        <ScrollView style={{flex: 1}} >
                        <View style={styles.nombreContainer}>
                            
                            <View style={styles.input}>
                                <Text style={styles.text}>Nombre</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.nombreUser}
                                        placeholder={'Nombre'}
                                        onChangeText={(nombre) => {this.setState({nombreUser: nombre})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.text}>Apellido</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.apellidoUser}
                                        placeholder={'Apellido'}
                                        onChangeText={(apellido) => {this.setState({apellidoUser: apellido})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.text}>Sexo</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.sexoUser}
                                        placeholder={'Sexo'}
                                        onChangeText={(sexo) => {this.setState({sexoUser: sexo})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                           <View style={styles.input}>
                               <Text style={styles.text}>Edad</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.edadUser}
                                        placeholder={'Edad'}
                                        onChangeText={(edad) => {this.setState({edadUser: edad})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                           </View>
                            <View style={styles.input}>
                                <Text style={styles.text}>Estado</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.estadoUser}
                                        placeholder={'Estado'}
                                        onChangeText={(estado) => {this.setState({estadoUser: estado})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.text}>Ciudad</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.ciudadUser}
                                        placeholder={'Ciudad'}
                                        onChangeText={(ciudad) => {this.setState({ciudadUser: ciudad})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.text}>Correo Electronico</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        value={this.state.emailUser}
                                        placeholder={'Correo Electronico'}
                                        onChangeText={(email) => {this.setState({emailUser: email})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                            </View>
                           {/* <View style={styles.input}>
                               <Text style={styles.text}>Contraseña requerida</Text>
                                <TextInput
                                        style={styles.textInput} 
                                        placeholder={'contraseña requerida'}
                                        onChangeText={(pass) => {this.setState({password: pass})}}
                                        placeholderTextColor={'rgba(29,58,108, 1.0)'}
                                /> 
                           </View> */}
                          
                        </View>
                        </ScrollView>
                            <View style={styles.boton}>
                                <TouchableOpacity style={styles.botonl}  onPress={() => this.update(this.state.idUser)}>
                                    <Text style={styles.textboton}>Listo</Text>
                                </TouchableOpacity>
                            </View>
                    {/* </View> */}
                </View> 
        </ImageBackground>
        )
    }
    
}
const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 3,
    },
    fotoPerfilContainer: {
        flex: 2,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end'    
    }, 
    nombreContainer: {
        flex: 3,
        marginLeft:'10%',
        marginRight: 10      // backgroundColor: 'green',
    },
    text: {
        width:'40%',
        fontWeight: 'bold',
        color:'rgba(29,58,108, 1.0)',
        fontSize: 18,
        textAlign: 'center'
    }, 
    fotoTouchable: {
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 100
    },
    input: {
        height:'18%',
        flexDirection:"row",
        alignItems:'center'
    },
    boton:{
        flex:2,
        alignItems:'center',
        justifyContent:"center"
    },
    botonl:{
        backgroundColor:'rgba(29,58,108, 1.0)',
        width:'30%',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5

    },
    textboton:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        
    }
})