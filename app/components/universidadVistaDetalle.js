import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class universidadVistaDetalle extends Component {
    static navigationOptions = {
        title: 'NombreUniversidad'
    }

    constructor(props){
        super(props);
        this.state = {
            titulo : 'NombreUniversidad'
        }
    }

    render() {
        const {clave_sep, nombre, logo, calle, colonia, altitud, longitud} = this.props.navigation.state.params.universidad
        return (
            <View>
                <Text>{clave_sep}</Text>
                <Text>{nombre}</Text>
                <Text>{logo}</Text>
                <Text>{calle}</Text>
                <Text>{colonia}</Text>
                <Text>{altitud}</Text>
                <Text>{longitud}</Text>
            </View>
        );
    }
}