import React,{Component} from 'react';
import {ImageBackground,View,Text,Image,TouchableOpacity,Alert,StyleSheet,ScrollView,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Logo extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View style={{ flex: 0.8 }}>
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

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => {this.props.navigation.openDrawer();}} />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",
            headerStyle: {
                backgroundColor: 'rgba(2,2,53, 1.0)',
              },
        };
      };

    constructor(props) {
        super(props);
        this.state = {
            // email : this.props.navigation.state.params.email,
        }
    }
      
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.titulo}>
                        <Text style={styles.textT}>Bienvenido a YKEKY</Text>
                        {/* <Text style={styles.textT}>{this.state.email.substr(0,10)}</Text> */}
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Test")}}
                            >
                            <Text><Icon name='user-graduate' size={50} color="black" /></Text>
                            <Text  style={{fontSize:15}} >
                                Test Vocacional
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("LifePlanner")}}
                            >
                            <Text><Icon name='hand-holding-heart' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Plan de Vida
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}>
                            <Text><Icon name='atlas' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Directorio Escolar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> Linking.openURL('https://www.becas.sep.gob.mx/') } >
                            <Text><Icon name='edit' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                               Becas
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