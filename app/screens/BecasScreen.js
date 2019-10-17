import React, { Component } from 'react';
import {ImageBackground,View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList,Linking,Alert} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Orientation from 'react-native-orientation';

colores = ['#8F44AD', '#2A80B9', '#16A086', '#26AD60', '#F29B10', '#C30052', '#18BC9A'];

universidades = ['UniversidadA','UniversidadB'];

function obtenerColor(colores) {
        let number = parseInt(Math.random()*7);
        // this.setState({colorRandom: colores[number]})
        return colores[number];
}

const BecasBox = (props) => {
    const {onPress, nombreBeca} = props;
    return(
        <TouchableOpacity style={[styles.becasBox, {backgroundColor: obtenerColor(colores)}]} onPress={onPress} >
            <Text style={styles.textBecasBox}>{nombreBeca}</Text>
        </TouchableOpacity>
    );
}

const Cajita = (props) =>{
    const { colorFondo, nombre, logo, clave_sep, onPress } = props
    return(
        <TouchableOpacity 
            style={{flex: 1,width: 70, height: 70}}
            onPress={onPress}
        >
            <Text style={{color: 'black', backgroundColor: colorFondo}}>Cuadro: {nombre}</Text>
            <Text style={{color: 'black', backgroundColor: colorFondo}}>Cuadro: {logo}</Text>
            <Text style={{color: 'black', backgroundColor: colorFondo}}>Cuadro: {clave_sep}</Text>
            
        </TouchableOpacity>
    )
}

export default class BecasScreen extends Component {
    static navigationOptions = {
        header: null
    }
    
    constructor(){
    super();
        this.state = {
            colorRandom: '',
        }
    }

    componentDidMount(){
        Orientation.lockToPortrait();
    }

    makeRemoteRequest = () =>{
        const urlServer = 'http://3.17.60.127:3001/api/instituciones/';
        fetch(urlServer)
        .then((response) => response.json())
        .then((response)=>{
            this.setState({
                data: JSON.stringify(response)
            })
            console.warn("Data", this.state.data);
        })
        .catch(error=>{
            Alert.alert("Error",error.message)
        })
    }

    async openLink(urlR) {
        try {
          const url = urlR;
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
            <ImageBackground source={require('../assets/dashboard/fondo.png')} style={{flex:1}} resizeMode={'cover'} >            
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.main}>
                <Text style={styles.titulo}>INFORMACIÓN SOBRE BECAS</Text>
                {/* <Text>{obtenerColor(colores)}</Text>
                <Text>{obtenerColor(colores)}</Text>
                <Text>{obtenerColor(colores)}</Text>
                <FlatList 
                    data={universidades}
                    renderItem={({item}) => <Cajita colorFondo={obtenerColor(colores)} nombre={item}/>}
                    // keyExtractor={}
                /> */}
                <BecasBox 
                    nombreBeca={'Becas Educación Superior'}
                    onPress={()=>{this.openLink("https://www.becaseducacionsuperior.sep.gob.mx/")}} 
                />
                <BecasBox 
                    nombreBeca={'Becas SEP'}
                    onPress={()=>{this.openLink("https://www.becas.sep.gob.mx/")}} 
                />

                </View>
                </ScrollView>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    titulo: {
        backgroundColor: obtenerColor(colores),
        color: '#FFF',
        fontFamily: 'GothamBold',
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 30,
        textAlign: 'center',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    containerBecasBox: {

    },
    becasBox: {
        width: 150,
        height: 70,
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textBecasBox: {
        textAlign: 'center',
        fontFamily: 'GothamBold',
        fontSize: 18,
        color: '#FFF',
    }
})