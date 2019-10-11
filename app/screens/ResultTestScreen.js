import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,TouchableOpacity,Dimensions,Alert, ScrollView} from 'react-native';
import { VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryTheme } from "victory-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import AsyncStorage from '@react-native-community/async-storage';
import Orientation from 'react-native-orientation';
import LinearGradient from 'react-native-linear-gradient';


var {width, height} = Dimensions.get('window');

// respuestas : this.props.navigation.state.params.respuestas,

const areasNombre = ['Ingeniería','Económico-Admvo','Ciencias básicas y exactas','Humanidades','Ciencias Sociales','Ciencias de la Salud'];

export default class ResultTestScreen extends Component {
    static navigationOptions = {
        title: "Resultados TV",
        header: null
        
    }

    constructor(props){
        super(props);
        this.state = {
            respuestas : 1,
            a: 15,
            b: 15,
            c: 15,
            d: 15,
            e: 20,
            f: 20,
            usuario: ''
        }
    }
    componentDidMount = () => {
        this.getData();
        Orientation.lockToPortrait();
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

    getData = async() =>{
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            this.setState({usuario: usuario})
        } catch(error) {
            console.log("Error")
        }
    }

    render() {
        this.contarElementos = (respuestas) => {

        }

        

        return (
            <ImageBackground source={require('../assets/testVocacional/fondo.png')} style={{flex: 1}} resizeMode={'cover'} >
                <ScrollView style={{flex: 1}}>
            <View style={StyleSheet.container}>
                <View>
                    <Image source={require('../assets/testVocacional/logo.png')} style={{width: 50, height: 30}} resizeMode={'contain'} />
                </View>
                <Text style={{fontSize:20, color: 'black', textAlign: 'center'}}>Hola {this.state.usuario}</Text>
                <Text 
                    style={{fontSize:20, color: 'rgba(29,58,108, 1.0)', textAlign: 'center', fontFamily: 'GothamMedium'}}>
                        RESULTADOS
                </Text>
                <Text 
                    style={{fontSize:14, color: 'rgba(29,58,108, 1.0)', textAlign: 'center', fontFamily: 'GothamMedium', backgroundColor: 'yellow'}}>
                        Esto es una simulación
                </Text>
                <View style={styles.chart}>    
                        <VictoryPie
                        width={width}
                        height={300}
                        data={[
                            { x: areasNombre[0], y: this.state.a },
                            { x: areasNombre[1], y: this.state.b },
                            { x: areasNombre[2], y: this.state.c },
                            { x: areasNombre[3], y: this.state.d },
                            { x: areasNombre[4], y: this.state.e},
                            { x: areasNombre[5], y: this.state.f}
                        ]}
                        colorScale={['#8F44AD','#2A80B9','#16A086','#26AD60','#F29B10', '#C30052']}
                        containerComponent={<VictoryContainer responsive={false}/>}
                        labelComponent={<VictoryLabel angle={0}/>}
                        labelRadius={90}
                        cornerRadius={5}
                        style={{ 
                            labels: { fill: "rgba(29,58,108, 1)", fontSize: 10, fontFamily: 'GothamBoold', fontWeight: 'bold' } , 
                            data: {fillOpacity: 0.9, stroke: "rgba(29,58,108, 1)", strokeWidth: 1
                            } }}
                        />
                </View>    
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify', fontFamily: 'GothamMedium', marginHorizontal: 20}}>Tu área mejor calificada es: "Ciencias de la Salud"</Text>
                {/* <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Por lo cual las carreras que puedes escoger son:</Text> */}
                {/* <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Enfermería, Farmacia, Fisioterapia, Medicina, Nutrición, Odontología</Text> */}
                <View style={styles.butonContainer}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.buton}>
                        <TouchableOpacity 
                            // style={styles.buton}
                            onPress={()=>{this.openLink("http://introspecta.com.mx/artes-y-humanidades/")}}
                            >
                            <Text style={styles.textButon}>
                                Artes y Humanidades
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.buton}>
                        <TouchableOpacity 
                            // style={styles.buton}
                            onPress={()=>{this.openLink("http://introspecta.com.mx/ciencias/")}}
                            >
                            <Text style={styles.textButon}>
                                Ciencias
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.buton}>
                        <TouchableOpacity 
                            // style={styles.buton}
                            onPress={()=>{this.openLink("http://introspecta.com.mx/ciencias-sociales/")}}
                            >
                            <Text style={styles.textButon}>
                                Ciencias Sociales
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.buton}>
                        <TouchableOpacity 
                            // style={styles.buton}
                            onPress={()=>{this.openLink("http://introspecta.com.mx/negocios-y-economia/")}}
                            >
                            <Text style={styles.textButon}>
                                Negocios
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFD549', '#E88F4F']}  style={styles.buton}>
                        <TouchableOpacity 
                            // style={styles.buton}
                            onPress={()=>{this.openLink("http://introspecta.com.mx/ingenierias/")}}
                            >
                            <Text style={styles.textButon}>
                                Ingenierías
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <TouchableOpacity 
                    style={{alignItems: 'flex-end', marginRight: 20}}
                    onPress={() => {this.props.navigation.navigate("DashboardScreen")}}
                >
                    <Text><Icon name="check" size={35} color="#000000" /></Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDBDBD"
    },
    chart: {
        alignItems: 'center'
    },
    butonContainer: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    buton: {
        width:'80%',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        // backgroundColor: 'blue'
    },
    textButon: {
        textAlign: 'center',
        fontFamily: 'GothamMedium',
        color: '#FFF'
    }
})