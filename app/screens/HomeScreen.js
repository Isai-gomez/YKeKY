import React,{Component} from 'react';
import {ImageBackground,View,Text,Image,TouchableOpacity,Alert,StyleSheet,ScrollView,Linking,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import InAppBrowser from 'react-native-inappbrowser-reborn';

class Logo extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/logo2.png')}
                resizeMode = "contain"
                style = {{width: 115,
                marginRight: 0,alignSelf:'center'}}
            />
            </View>
        );
    }
}

class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.hambuguer} onPress = {this.props.onPress} ><Text><Icon name="bars" size={30} color="#fff" /></Text></TouchableOpacity>
        );
    }
}

class LogoutButton extends React.Component{
    render(){
        return( 
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Initial")}} ><Text><Icon name="search" size={30} color="#fff" /></Text></TouchableOpacity>
        );
    }
}

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => {}} />,
            headerRight: <LogoutButton />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",
            headerStyle: {
                backgroundColor: 'rgba(2,2,53, 1.0)',
            },
        };
      };

    componentDidMount() {
        this.getData();
    }

    constructor(props) {
        super(props);
        this.state = {
            email : ''
        }
    }

    _logout = async() => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate("Login");
          } catch(e) {
            console.log("Error" + e)
          }
        
          console.log('Done.')
    }

    getData = async() =>{
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            this.setState({email: usuario})
        } catch(error) {
            console.log("Error")
        }
    }
      
    async openLink() {
        try {
          const url = 'https://www.becas.sep.gob.mx/'
          if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.open(url, {
              // iOS Properties
              dismissButtonStyle: 'cancel',
              preferredBarTintColor: '#020235',
              preferredControlTintColor: 'white',
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'overFullScreen',
              modalTransitionStyle: 'partialCurl',
              modalEnabled: true,
              // Android Properties
              showTitle: true,
              toolbarColor: '#020235',
              secondaryToolbarColor: 'black',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: false,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
              },
              headers: {
                'my-custom-header': 'my custom header value'
              }
            })
            // Alert.alert(JSON.stringify(result))
          }
          else Linking.openURL(url)
        } catch (error) {
          Alert.alert(error.message)
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "rgba(2,2,52, 1.0)" translucent = {false}/>
                <View style={styles.titulo}>
                        <Text style={styles.textT}>Bienvenido a YKEKY</Text>
                        <Text style={styles.textT}>{this.state.email}</Text>
                        {/* <Text style={styles.textT}>{this.state.email.substr(0,10)}</Text> */}
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Instruccion_Ts")}}
                            >
                            <Text><Icon name='user-graduate' size={50} color="black" /></Text>
                            <Text  style={{fontSize:15}} >
                                Test Vocacional
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Instruccion_Lp")}}
                            >
                            <Text><Icon name='hand-holding-heart' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Plan de Vida
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Directorio")}}
                            >
                            <Text><Icon name='atlas' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Directorio
                            </Text>
                            <Text style={{fontSize:15}}>
                                Escolar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> {this.openLink()}} >
                            <Text><Icon name='edit' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                               Becas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> Linking.openURL('https://www.16personalities.com/es') } >
                            <Text><Icon name='users' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                16personalities
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> {this._logout()} } >
                            <Text><Icon name='power-off' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                               Salir
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green'
    },
    hambuguer:{
        marginLeft: 5,
    },
    titulo:{
        flex: 0.4 ,
        backgroundColor:'rgba(2,2,53, 1.0)',
        justifyContent:'center',
        alignItems: 'center',
    },
    textT:{
        color: '#fff',
        fontSize: 25
    },
    card:{
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    cartita: {
        alignItems:"center",
        justifyContent: 'center',
        width: 130,
        height: 170,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,       
    }
})