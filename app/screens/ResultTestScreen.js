import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet, Image} from 'react-native';
import { VictoryPie, VictoryContainer, VictoryLabel } from "victory-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

// respuestas : this.props.navigation.state.params.respuestas,

export default class ResultTestScreen extends Component {
    static navigationOptions = {
        title: "Resultados TV",
        header: null
        
    }

    constructor(props){
        super(props);
        this.state = {
            respuestas : 1,
            a: 5,
            b: 10,
            c: 15,
            d: 20,
            e: 25,
            f: 30,
            usuario: ''
        }
    }
    componentDidMount = () => {
        this.getData();
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
                    data={[
                        { x: "Ingeniería", y: this.state.a },
                        { x: "Económico-Admvo", y: this.state.b },
                        { x: "Ciencias bás y exac", y: this.state.c },
                        { x: "Humanidades", y: this.state.d },
                        { x: "Ciencias Soc", y: this.state.e},
                        { x: "Ciencias Salud", y: this.state.f}
                      ]}
                    colorScale={['#8F44AD','#2A80B9','#16A086','#26AD60','#F29B10', '#C30052']}
                    containerComponent={<VictoryContainer responsive={false}/>}
                    labelComponent={<VictoryLabel angle={320}/>}
                    labelRadius={90}
                    style={{ labels: { fill: "black", fontSize: 14 } }}
                    />
                </View>    
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Tu área mejor calificada es: "Ciencias de la Salud"</Text>
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Por lo cual las carreras que puedes escoger son:</Text>
                <Text style={{fontSize:14, color: 'black', textAlign: 'justify'}}>Enfermería, Farmacia, Fisioterapia, Medicina, Nutrición, Odontología</Text>
                <TouchableOpacity 
                    style={{alignItems: 'flex-end'}}
                    onPress={() => {this.props.navigation.navigate("Home")}}
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
        
    }
})