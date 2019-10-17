import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet, Dimensions,TouchableOpacity} from 'react-native';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'transparent'
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/profile/fondo.png')} style={styles.fondo} resizeMode={'cover'}>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.fotoPerfilContainer}>
                            <TouchableOpacity 
                                style={styles.fotoTouchable}
                            >

                            </TouchableOpacity>
                        </View>
                        <View style={styles.nombreContainer}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>SARA ELIZABETH</Text>
                            <Text style={styles.text}>UNIVERSIDAD</Text>
                        </View>
                        <View style={styles.edadDomicilioContainer}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>20 años</Text>
                            <Text style={styles.text}>Mujer</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={[styles.text,{fontWeight: 'bold'}]}>TABASCO</Text>
                            <Text style={styles.text}>Villahermosa</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 3,
    },
    bottomContainer: {
        flex: 3,
    },
    fotoPerfilContainer: {
        flex: 3,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end'    
    }, 
    nombreContainer: {
        flex: 1.5,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    edadDomicilioContainer: {
        flex: 1.5,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#fff',
        fontSize: 18
    }, 
    fotoTouchable: {
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 100
    }
})