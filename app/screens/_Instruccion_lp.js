import React from 'react';
import {ScrollView, View , Text ,TouchableOpacity,StyleSheet,Image} from 'react-native';



class Instruccion_lp extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.card}>
                    <View style={styles.contenido}>
                        <Text style={{fontSize:25, textAlign:'center', color:'black'}}>
                            Instrucciones
                        </Text>
                        <Text style={styles.p}>
                                Al cultivar una óptima relación con nosotros mismos encontramos interiormente lo que buscamos afuera, una manera de cultivar esa relación es haciendo de nuestra vida un proyecto magnífico ¿cómo? Cultivando las 12 áreas básicas de vida que son:
                        </Text>  
                       
                    </View>  
                    <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
                        <Image 
                                source={require('./../assets/imagenSlider3.png')}s
                                style={{ width: 360, height: 380}}
                                resizeMode={'cover'}
                        />    
                        <Text style={{fontSize:15, textAlign:'justify', color:'black'}}>
                            Para cultivar las 12 áreas te sugiero darles primero una calificación a cada una que puede ser 1= Deficiente, 5= Regular y 10 = Excelente aunque también puedes incluir los matices de 2,3,4,6,7,8 y 9. Sí la calificación que pones en las áreas es menor a 8 por ejemplo , entonces te sugiero ponerte tres metas en el área que tenga esa calificación esto con el propósito de que esa área suba de calificación y que esté a tu entera satisfacción.
                        </Text> 
                    </View>                                     
                    <View style={{alignItems:"center"}}>
                       
                        
                        <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate("LifePlanner")}>
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
export default Instruccion_lp;