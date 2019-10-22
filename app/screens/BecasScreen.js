import React, { Component } from 'react';
import {ImageBackground,View,Text,StyleSheet,TouchableOpacity,ScrollView,Alert} from 'react-native';
import Orientation from 'react-native-orientation';
import {openLinkWithInAppBrowser} from '../helpers';

colores = ['#8F44AD', '#2A80B9', '#16A086', '#26AD60', '#F29B10', '#C30052', '#18BC9A'];

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
                    onPress={()=>{openLinkWithInAppBrowser("https://www.becaseducacionsuperior.sep.gob.mx/")}} 
                />
                <BecasBox 
                    nombreBeca={'Becas SEP'}
                    onPress={()=>{openLinkWithInAppBrowser("https://www.becas.sep.gob.mx/")}} 
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