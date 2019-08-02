import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { VictoryPie } from "victory-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { VictoryLabel } from 'victory-core/es';

// respuestas : this.props.navigation.state.params.respuestas,

export default class ResultTestScreen extends Component {
    static navigationOptions = {
        title: "Resultados :)"
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
            f: 30
        }
    }
    componentDidMount = () => {

    }
    render() {
        this.contarElementos = (respuestas) => {

        }
        return (
            <View style={StyleSheet.container}>
                <Text>{this.state.respuestas}</Text>
                <Text>Como resultados de tu prueba de Test Vocacional:</Text>
                <VictoryPie 
                    data={[
                        { x: "Ingeniería", y: this.state.a },
                        { x: "Económico-Administrativo", y: this.state.b },
                        { x: "Ciencias básicas y exactas", y: this.state.c },
                        { x: "Humanidades", y: this.state.d },
                        { x: "Ciencias Sociales", y: this.state.e},
                        { x: "Ciencias de la Salud", y: this.state.f}
                      ]}
                      colorScale={["rgba(173,185,202,1)", "rgba(189,214,238,1)", "rgba(247,202,172,1)", 
                        "rgba(255,229,152,1)", "rgba(200,200,200,1)", "rgba(197,224,179,1)"]}
                />
                <Text>Tu área mejor calificada es: "Ciencias de la Salud"</Text>
                <Text>Por lo cual las carreras que puedes escoger son:</Text>
                <Text>Enfermería, Farmacia, Fisioterapia, Logopedia, Medicina, Nutrición, Odontología</Text>
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

})