import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { VictoryPie, VictoryContainer, VictoryLabel } from "victory-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

// respuestas : this.props.navigation.state.params.respuestas,

export default class ResultTestScreen extends Component {
    static navigationOptions = {
        title: "Resultados TV",
        
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
            <View style={StyleSheet.container}>
                <Text style={{fontSize:20, color: 'black', textAlign: 'center'}}>Hola {this.state.usuario}</Text>
                <Text style={{fontSize:16, color: 'black', textAlign: 'justify'}}>Como resultados de tu prueba de Test Vocacional:</Text>
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
                    colorScale={["rgba(173,185,202,1)", "rgba(189,214,238,1)", "rgba(247,202,172,1)", 
                        "rgba(255,229,152,1)", "rgba(200,200,200,1)", "rgba(197,224,179,1)"]}
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