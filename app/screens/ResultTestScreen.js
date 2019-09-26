import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native';
import { VictoryPie, VictoryContainer, VictoryLabel, VictoryChart, VictoryTheme } from "victory-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import Orientation from 'react-native-orientation';

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
            <View style={StyleSheet.container}>
                <View>
                    <Image source={require('../assets/testVocacional/logo.png')} style={{width: 50, height: 30}} resizeMode={'contain'} />
                </View>
                <Text style={{fontSize:20, color: 'black', textAlign: 'center'}}>Hola {this.state.usuario}</Text>
                <Text 
                    style={{fontSize:20, color: 'rgba(29,58,108, 1.0)', textAlign: 'center', fontFamily: 'GothamMedium'}}>
                        RESULTADOS
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
                        style={{ labels: { fill: "rgba(29,58,108, 1)", fontSize: 8, fontFamily: 'GothamBook', fontWeight: 'bold' } }}
                        />
                </View>    
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Tu área mejor calificada es: "Ciencias de la Salud"</Text>
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Por lo cual las carreras que puedes escoger son:</Text>
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Enfermería, Farmacia, Fisioterapia, Medicina, Nutrición, Odontología</Text>
                <TouchableOpacity 
                    style={{alignItems: 'flex-end'}}
                    onPress={() => {this.props.navigation.navigate("DashboardScreen")}}
                >
                    <Text><Icon name="check" size={35} color="#000000" /></Text>
                </TouchableOpacity>
            </View>
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
    }
})