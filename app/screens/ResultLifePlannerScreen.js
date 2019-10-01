import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,ImageBackground} from 'react-native';
import Chart from '../components/chart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Orientation from 'react-native-orientation';

export default class ResultLifePlannerScreen extends Component {
    static navigationOptions = {
        header:null
        // title: "Resultados plan de vida",
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
      }

      componentDidMount(){
        Orientation.lockToPortrait();
      }
    render() {
        return (
            <ImageBackground source={require('../assets/planVida/Resultados/fondoRl.png')} style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{flex:0.5}}>
                    <ImageBackground source={require('../assets/planVida/Resultados/fonfoGrafica.png')} style={{flex:1}}>
                    <Chart/>
                    </ImageBackground>
                </View>
                <View style={styles.container}>
                <ScrollView>
                    <View  style={styles.scroll}>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Esp</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>10</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Econo</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>3</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Tra</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>8</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Ecol</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>9</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Sex</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>1</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Soc</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>5</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Salud</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>6</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Fam</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>7</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Prof</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>3</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Pareja</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>2</Text>
                            </View>
                        </View>
                        <View  style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Emoci</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>10</Text>
                            </View>
                        </View>
                        <View style={styles.mincard}>
                            <View style={styles.resu}>
                                <Text style={{color:'white'}}>Con</Text>
                            </View>
                            <View style={styles.resu2}>
                                <Text style={{color:'white'}}>10</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                    <View>               
                        <TouchableOpacity 
                            style={{alignItems: 'flex-end'}}
                            onPress={() => {this.props.navigation.navigate("DashboardScreen")}}
                        >
                            <Text><Icon name="arrow-circle-right" size={35} color="#000000" /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

let colors = []

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        
    },
    contitle:{
        justifyContent:"center",
        alignItems:"center"
    },

    mincard:{
        backgroundColor: "#b7d6ec",
        borderRadius: 20,
        height:100,
        width:50,
        margin:5,
       
    },
    scroll:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    resu:{
        backgroundColor:'rgba(2,2,53, 1.0)',
        height:'50%', 
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        justifyContent:"center",
        alignItems:'center'
    },
    resu2:{
        height:'50%', 
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        justifyContent:"center",
        alignItems:'center'
    },

})