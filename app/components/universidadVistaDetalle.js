import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,ImageBackground,Button,Alert} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import ModalExample from '../components/Modal';

export default class universidadVistaDetalle extends Component {
    static navigationOptions =
    {    
        title:'',
        headerStyle: {
            backgroundColor: 'transparent',
          },
        headerTitleStyle: {
            color:'#fff',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        headerTintColor:'#fff',
        tintStyle:{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        headerTransparent: true,
        visible: false
    }

    constructor(props){
        super(props);
        this.state = {
            titulo : 'NombreUniveridad',
            visible: false
        }
    }
    
    toggleModal = () => {
        this.setState({visible: !this.state.visible});
    }

    render() {
        const {clave_sep, nombre, logo, calle, colonia, latitud, longitud,fachada,vision} = this.props.navigation.state.params.universidad
        var region = {
            latitude: parseFloat(latitud),
            longitude: parseFloat(longitud),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

        
        return (
            <ImageBackground source={require('../assets/directorio/pantalla2/fondop2.png')} style={{flex:1}}>
            <ScrollView style={styles.container}>
                <View style={styles.containerimg}>
                    <ImageBackground
                        source={{uri:fachada}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={styles.contenido}>
                    <View style={styles.logocontainer}>
                        <Text style={{fontFamily: 'GothamBold',width:'70%'}}>{nombre}</Text>
                        <Image
                            source={{uri:logo}}
                            style={{width:100,height:100,bottom:0,borderRadius:100,borderWidth:5, borderColor:'#ccc',position:'absolute',right:0}}
                        />
                    </View>
                    <View style={styles.contherramientas}>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r1.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r2.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r3.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r4.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r5.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r6.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r6.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{Alert.alert("Información", "Aún no disponibles")}}><Image source={require('../assets/directorio/pantalla6/pantalla6r8.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                    </View> 
                    <View style={{borderColor:'rgba(29,58,108, 1.0)', borderWidth:2}}>               
                        <Text style={{fontFamily: 'GothamBold'}}>Clave de la SEP:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{clave_sep}</Text>
                        <Text style={{fontFamily: 'GothamBold'}}>Calle:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{calle}</Text>
                        <Text style={{fontFamily: 'GothamBold'}}>Colonia:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{colonia}</Text>
                        <Text style={{fontFamily: 'GothamBold'}}>Vision:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{vision}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Button
                                title="Carreras"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
                            <ModalExample visible={this.state.visible} close={this.toggleModal}/>
                            <Button
                                onPress={this.toggleModal}
                                title="Contacto"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
                            </View> 
                    </View>
                </View> 
         		{/* <View style={styles.containermap}>
                    <MapView
                        style={styles.map}
                        initialRegion={region}
                        maxZoomLevel= {20}
                >
                     <Marker
                        coordinate={{latitude:parseFloat(latitud),
                            longitude: parseFloat(longitud)}}
                        title={nombre}
                        >
                            <Image source={{uri:logo}} style={{height: 28, width:28,borderRadius:100, borderWidth:2,borderColor:'red' }}/>
                        </Marker>
                </MapView>
                </View> */}
            </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    map: {
      flex:1,
      height:'100%',
      width:'100%'
    },
    containerimg:{
        height: 270,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    container:{
        flex:1,
    },
    logocontainer:{
        height: 50,
        backgroundColor:'#fff',
        borderBottomColor:'rgba(29,58,108, 1.0)',
        borderBottomWidth:2
    },
    contenido:{
        padding:8,
        marginLeft:8,
        marginRight:8,
        flex:2,
        backgroundColor:"#fff",
        marginTop:'-20%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    containermap:{
        marginLeft:8,
        marginRight:8,
        height:300,
        backgroundColor:'#fff',
        marginTop:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    contherramientas:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        margin: 25
    },
    herramienta:{
        borderColor:'rgba(29,58,108, 1.0)',
    }
  });