import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet, Dimensions,TouchableOpacity, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileScreen extends Component {
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
            tokerUser: ''
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
                  });
            })
            .catch(error => {
                console.warn("Error: ", error)
            });
    }

    render() {
        return (
            <ImageBackground source={require('../assets/profile/fondo.png')} style={styles.fondo} resizeMode={'cover'}>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.fotoPerfilContainer}>
                            <TouchableOpacity 
                                style={styles.fotoTouchable}
                            >
                                <Image source={require('../assets/perfil.png')} resizeMode={'contain'} style={{width:120, height: 120, borderRadius: 100}} />
                            </TouchableOpacity>
                            <Text 
                                style={{color: '#FFF', marginTop: 5}}
                                onPress={()=>this.props.navigation.navigate('EditProfile')}
                                >
                                Editar perfil
                            </Text>
                        </View>
                        <View style={styles.nombreContainer}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>{this.state.nombreUser.toUpperCase()} {this.state.apellidoUser.toUpperCase()}</Text>
                            <Text style={styles.text}>UNIVERSIDAD</Text>
                        </View>
                        <View style={styles.edadDomicilioContainer}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>{this.state.edadUser} años.</Text>
                            <Text style={styles.text}>{this.state.sexoUser}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>TABASCO</Text>
                            <Text style={styles.text}>Villahermosa</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                    </View>
                </View>
            </ImageBackground>
        );
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
        flex: 3,
    },
    bottomContainer: {
        flex: 3,
    },
    fotoPerfilContainer: {
        flex: 3,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end'    
    }, 
    nombreContainer: {
        flex: 1.5,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    edadDomicilioContainer: {
        flex: 1.5,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }, 
    fotoTouchable: {
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 100
    }
})