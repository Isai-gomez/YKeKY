import React,{Component} from 'react';
import {ImageBackground,View,Image,Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

var colors = ['rgba(229,82,62,1)','rgba(63,154,225,1)','rgba(180,160,255,1)','rgba(64,198,174,1)'];

export default class GanaDineroScreen extends Component{
    static  navigationOptions = {
        header: null
    }

    render(){
        return(
            <ImageBackground source={require('../assets/ganaDinero/fondo.png')} style={{flex: 1}} resizeMode={'cover'} >
                <Image source={require('../assets/ganaDinero/Recurso1.png')} style={{width: 100, height: 100, position: 'absolute', top: '-9%', left: '-10%' }} />
                <Image source={require('../assets/ganaDinero/Recurso2.png')} style={{width: 200, height: 170, position: 'absolute', top: '-9%', right: '-1%' }} />
                <Image source={require('../assets/ganaDinero/Recurso3.png')} style={{width: '95%', height: '40%', position: 'absolute', bottom: '-20%', right: '-2%' }} />
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/ganaDinero/logo.png')} style={{width: 100, height: 100, marginLeft: '5%'}} resizeMode={'contain'} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>¿Quieres ganar dinero sin dejar de estudiar? $$</Text>
                    </View>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitleText} >En YKeKY te ofrecemos herramientas para que puedas emprender sin tener que dejar los estudios. Puedes revisar las siguientes categorias:</Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <ScrollView style={{flex: 1}}>
                            <View style={styles.linksContainer}>
                                <TouchableOpacity style={[styles.linksCard,{backgroundColor: colors[0]}]}>
                                    <Text style={styles.textLinks}>La guía del emprendedor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.linksCard,{backgroundColor: colors[1]}]}>
                                    <Text style={styles.textLinks}>¿Cómo ganar? Sigue estos sencillos pasos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.linksCard,{backgroundColor: colors[2]}]}>
                                    <Text style={styles.textLinks}>Consejos para aumentar ingresos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.linksCard,{backgroundColor: colors[3]}]}>
                                    <Text style={styles.textLinks}>Bolsa de trabajo YKeKY</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    titleContainer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    subtitleContainer: {
        flex: 1,
    },
    linksContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'Gotham-Black',
        color: 'rgba(29,58,108, 1.0)',
        textAlign: 'center',
        padding: 40,
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: 'GothamBook',
        textAlign: 'center',
        padding: 10,
        color: 'rgba(30,58,109, 1.0)',
    },
    linksCard: {
        width: '40%',
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10       
    },
    textLinks: {
        textAlign: 'center',
        fontFamily: 'GothamBold',
        color: '#fff'
    }
})