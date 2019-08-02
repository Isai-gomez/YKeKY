import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Chart from '../components/chart';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ResultLifePlannerScreen extends Component {
    static navigationOptions = {
        title: "Resultados plan de vida"
      }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Chart/>
                </View>
                <View>
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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDBDBD",
        flexDirection: 'column'
    },

})