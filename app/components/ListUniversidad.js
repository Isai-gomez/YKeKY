import React ,{Component} from 'react';
import {View,Text, Image,TouchableOpacity,StyleSheet} from 'react-native';





export default class listUniversidades extends Component {

    render(){
        const {nombre,logo,clave_sep, colorFondo, onPress} = this.props;
        return(
            <View style={styles.container}>
                <Text style={[styles.titulo, {backgroundColor: colorFondo}]}>
                    {nombre}    
                </Text>
                <View style={styles.informacion}>
                    <Image
                        source={{uri:logo}}
                        style={styles.logo}
                        resizeMode={'contain'}
                    />
                    <View style={styles.contentclave}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.subtitulo}>CLAVE:</Text>
                            <Text style={styles.subtitulo}>
                                {clave_sep}
                            </Text>
                        </View>                      
                        <TouchableOpacity 
                            style={[styles.boton, {backgroundColor: colorFondo}]}
                            onPress={onPress}
                        >
                            <Text style={styles.textboton}>Consultar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            // width:'100%',
            // height:'25%',
            justifyContent:'center',
            marginBottom:10
        },
        informacion:{
            flexDirection:'row',
        },
        titulo:{
            color: '#ffff',
            fontWeight:'bold',
            fontFamily:'GothamBold',
            fontSize:16,
            textAlign:"center",
            borderRadius:5
        },
        subtitulo:{
            fontSize: 20,
            color:'rgba(29,58,108, 1.0)',
            textAlign:'center',
            fontFamily:'GothamBold'
        },
        logo:{
            width:100,
            height:100,
            borderRadius:100
        },
        contentclave:{
            justifyContent:'center',
            alignItems:'center',
            width:'70%',
        },
        boton:{
            borderRadius:5,
            padding:5,
            marginTop:10
        },
        textboton:{
            color: '#ffff',
            fontWeight:'bold',
            fontFamily:'GothamBold',
            fontSize:12,
            textAlign:"center",
            
        }
    }
)
