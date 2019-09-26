import React from 'react';
import {ScrollView, View , Text ,TouchableOpacity,StyleSheet,Image,ImageBackground} from 'react-native';
import Orientation from 'react-native-orientation';

class Instruccion_Ts extends React.Component {
    static navigationOptions = {
        header:null
        // title: 'Instrucciones',
        // headerStyle: {
        //   backgroundColor: 'rgba(2,2,53, 1.0)',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      };

      componentDidMount(){
        Orientation.lockToPortrait();
      }

    render () {
        return (
            <ImageBackground source={require('../assets/ifont2.png')} style={{width:'100%',height:'100%'}}>
                 <ImageBackground style={{width:'100%',height:'100%'}}>
                    <View style={styles.container}>
                    <Image source={require('../assets/Recurso6.png')} style={{width:64, height:70,position:'absolute',top:'0%',right:'0%'}}/>
                        <ScrollView style={styles.card}>                        
                            <View style={styles.contenido}>
                                <Text style={{fontSize:30, textAlign:'center', color:'#fff',fontFamily: 'GothamBold'}}>
                                    Instrucciones
                                </Text>
                                <Text style={styles.p}>
                                    Con este test identificarás tus intereses y habilidades vocacionales   
                                </Text>                              
                            </View>  
                            <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
                                <Image 
                                        source={require('./../assets/insilus.png')}s
                                        style={{ width: 200, height: 210}}
                                        resizeMode={'contain'}
                                />    
                            </View>                                     
                            <View style={{alignItems:"center"}}>
                                <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate("Test")}>
                                    <Text style={{color: '#fff',textAlign:"center",fontFamily:'GothamBook',fontSize:20,fontWeight:'bold'}}>
                                        Empezar
                                    </Text>
                                </TouchableOpacity>
                            </View>                            
                        </ScrollView>                
                    </View>
                </ImageBackground>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      flexDirection: "row", 
      justifyContent: 'center',
      alignItems: 'center'
    //   flexWrap: 'wrap',
     
    },
    card: {
      flex:1,
      width:'100%',
      height:'97%',
      margin: '2%',      
    },
    item: {
        color:'black',
        padding: 3,
        fontSize: 12,
        height: 24,
      },
    boton : {
        margin:20,
        height:40,
        width:110 ,
        backgroundColor: '#FFC500',
        borderRadius: 4,
        borderWidth: 4.3,
        borderColor: '#FFC500',
        alignItems: 'center',
        justifyContent: 'center',

    },
    contenido:{
        flex:1,
        alignItems: 'center',
        margin:10,
        
    },
    
    p : {
        fontFamily:'GothamBook',
        textAlign:'center',
        fontSize:20,
        color: '#fff'
    },
  });
export default Instruccion_Ts;