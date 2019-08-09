import React from 'react';
import {ScrollView, View , Text ,TouchableOpacity,StyleSheet,Image} from 'react-native';



class Instruccion_Ts extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.card}>
                    <View style={styles.contenido}>
                        <Text style={{fontSize:25, textAlign:'center', color:'black'}}>
                            Instrucciones
                        </Text>
                        <Text style={styles.p}>
                             Con este test identificarás tus intereses y habilidades vocacionales   
                        </Text>  
                       
                    </View>  
                    <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
                        <Image 
                                source={require('./../assets/imagenSlider2.png')}s
                                style={{ width: 160, height: 180}}
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
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#eeeeee',
      flexDirection: "row", 
      justifyContent: 'center',
    //   flexWrap: 'wrap',
     
    },
    card: {
      flex:1,
      backgroundColor:'#fff',
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
        margin:10,
        height:40,
        width:110 ,
        backgroundColor: '#0096d2',
        borderRadius: 4,
        borderWidth: 4.3,
        borderColor: '#00aae4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    contenido:{
        flex:1,
        alignItems: 'center',
        margin:10,
        
    },
    
    p : {
        textAlign:'justify',
        fontSize:15,
        color: 'black'
    },
  });
export default Instruccion_Ts;