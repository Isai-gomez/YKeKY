import React from 'react';
import {ScrollView, View , Text ,TouchableOpacity,StyleSheet,Image,ImageBackground} from 'react-native';



class Instruccion_lp extends React.Component {
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
                        <Text style={{fontSize:25, textAlign:'center', color:'#fff',fontWeight:'bold'}}>
                            Instrucciones
                        </Text>
                        <Text style={styles.p}>
                                Al cultivar una óptima relación con nosotros mismos encontramos interiormente lo que buscamos afuera, una manera de cultivar esa relación es haciendo de nuestra vida un proyecto magnífico ¿cómo? Cultivando las 12 áreas básicas de vida que son:
                        </Text>  
                       
                    </View>  
                    <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
                        <Image 
                                source={require('./../assets/planlus.png')}s
                                style={{ width: 340, height: 260}}
                                resizeMode={'contain'}
                        />    
                        <Text style={{fontSize:20, textAlign:'center', color:'#fff',fontWeight:'bold'}}>
                            Califica las 12 areas
                        </Text>
                        <Text style={{fontSize:20, textAlign:'center', color:'#fff'}}>
                            Para cultivar las doce áreas te sugierio primero darles una calificaión:
                        </Text>
                        <View style= {styles.contcal}>
                                <View style={styles.cal}><Text style={{color:'#fff'}}>1= Deficiente</Text></View>
                                <View style={styles.cal}><Text style={{color:'#fff'}}>5= Regular</Text></View>
                                <View style={styles.cal}><Text style={{color:'#fff'}}>10 = Excelente</Text></View>
                        </View>
                        <Text style={{fontSize:15, textAlign:'justify', color:'#fff'}}>
                             También puedes incluir los matices de 2,3,4,6,7,8 y 9. Sí la calificación que pones en las áreas es menor a 5 por ejemplo , entonces te sugiero ponerte tres metas en el área que tenga esa calificación esto con el propósito de que esa área suba de calificación y que esté a tu entera satisfacción.
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
    //   flexWrap: 'wrap',
     
    },
    card: {
      flex:1,
      width:'100%',
      height:'97%',
      margin: '2%',
      borderRadius: 5,  
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
        color: '#fff'
    },
    contcal:{
        flexDirection:'row'
    },
    cal:{
        borderWidth:2,
        borderColor:'#fff',
        margin:3,
        padding:2
    },

  });
export default Instruccion_lp;