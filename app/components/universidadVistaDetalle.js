import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,ImageBackground,Button} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import ModalExample from '../components/Modal';



export default class universidadVistaDetalle extends Component {
    static navigationOptions =
    {    
        title:'NombreUniveridad',
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
            <ScrollView style={styles.container}>
                <View style={styles.containerimg}>
                    <ImageBackground
                        source={{uri:fachada}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={styles.contenido}>
                    <View style={styles.logocontainer}>
                        <Image
                            source={{uri:logo}}
                            style={{width:140,height:140,bottom:0,borderRadius:100,borderWidth:5, borderColor:'#ccc',marginTop:-80,position:'absolute'}}
                        />
                    </View>
                    <Text style={{fontFamily: 'GothamBold'}}>Clave de la SEP:</Text>
                    <Text style={{fontFamily: 'GothamBook'}}>{clave_sep}</Text>
                    <Text style={{fontFamily: 'GothamBold'}}>Nombre de la univesidad:</Text>
                    <Text style={{fontFamily: 'GothamBook'}}>{nombre}</Text>
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
        backgroundColor:'#ccc'
    },
    logocontainer:{
        height: 50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
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
    }
  });