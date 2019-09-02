import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Button,Linking} from 'react-native';

export default class universidadVistaDetalle extends Component {
    static navigationOptions = {
        title: 'NombreUniversidad',
        header:null
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
            <ScrollView style={{flex:1}}>
                <View style={styles.containerimg}>
                    <Image
                        style={{width:100,height:100,borderRadius:100,margin:10}}
                        source={{uri:logo}}
                    />
                </View>
                <View style={{flex:2,margin:10}}>
                    <Text style={{fontFamily: 'GothamBold'}}>Clave de la SEP:{clave_sep}</Text>
                    <Text style={{fontFamily: 'GothamBold'}}>Nombre de la univesidad:{nombre}</Text>
                    <Text style={{fontFamily: 'GothamBold'}}>Calle:{calle}</Text>
                    <Text style={{fontFamily: 'GothamBold'}}>Colonia: {colonia}</Text>
                </View>
                <Button
                    title={'Abrir en Mapa'} 
                    onPress={ ()=> Linking.openURL(`geo:${altitud}+${longitud}?q=${nombre}`) }
                />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    map: {
      flex:1,
      position:'absolute',
      top:0,
      left:0,
      bottom:0,
      right:0,
    },
    containerimg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  });