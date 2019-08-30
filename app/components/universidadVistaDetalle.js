import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,ImageBackground} from 'react-native';
import MapView,{Marker} from 'react-native-maps';


export default class universidadVistaDetalle extends Component {
    static navigationOptions =
    {    
        title:'NombreUniveridad',
        headerStyle: {
            backgroundColor: 'transparent',
          },
        headerTransparent: true
    }

    constructor(props){
        super(props);
        this.state = {
            titulo : 'NombreUniveridad'
        }
    }

    render() {
        const {clave_sep, nombre, logo, calle, colonia, altitud, longitud,fachada,vision} = this.props.navigation.state.params.universidad
        var region = {
            latitude: parseFloat(altitud),
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
                        <Image
                        source={{uri:logo}}
                        style={{width:75,height:75,position:'absolute',bottom:0, left:0,borderRadius:100,borderWidth:5, borderColor:'#fff'}}
                        />
                </View>
                <View style={styles.contenido}>
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
                </View> 
         		<View style={styles.containermap}>
                    <MapView
                        style={styles.map}
                        initialRegion={region}
                        maxZoomLevel= {20}
                >
                     <Marker
                        coordinate={{latitude:parseFloat(altitud),
                            longitude: parseFloat(longitud)}}
                        title={nombre}
                     />
                </MapView>
                </View>
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
    contenido:{
        flex:2,
        backgroundColor:"#fff",
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
    containermap:{
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