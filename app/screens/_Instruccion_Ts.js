import React from 'react';
import {ScrollView, View , Text ,TouchableOpacity,StyleSheet,Image,ImageBackground} from 'react-native';



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
    render () {
        return (
            <ImageBackground source={require('../assets/ifont2.png')} style={{width:'100%',height:'100%'}}>
                 <ImageBackground source={require('../assets/ifont1.png')} style={{width:'100%',height:'100%'}}>
                    <View style={styles.container}>
                        <ScrollView style={styles.card}>                        
                            <View style={styles.contenido}>
                                <Text style={{fontSize:30, textAlign:'center', color:'#fff',fontWeight:'bold'}}>
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
                                    <Text style={{color: '#fff',textAlign:"center"}}>
                                        Iniciar Prueba
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
      borderWidth: .1,
      borderRadius: 5,
      shadowColor: '#757575',
      shadowOpacity: .1,
      shadowOffset: {width:-2 ,height: 7},
      elevation: 4,
      
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
        textAlign:'center',
        fontSize:20,
        color: '#fff'
    },
  });
export default Instruccion_Ts;