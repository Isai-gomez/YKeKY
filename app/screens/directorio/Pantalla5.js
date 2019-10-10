import React, { Component } from 'react';
import {View, ImageBackground,StyleSheet,Image,Text,ActivityIndicator,TouchableOpacity,FlatList,TextInput} from 'react-native';
import ListUnivesidades from '../../components/ListUniversidad';
import Orientation from 'react-native-orientation';
import {SearchBar} from 'react-native-elements';
import UniversidadVistaDetalle from '../../components/universidadVistaDetalle';

export default class pantalla5 extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        tipo: this.props.navigation.state.params.tipoUniversidad,
        data:[],
        loading: false,
        error: null
    };

    arrayholder = [];

    componentDidMount() {
        this.makeRemoteRequest();
        Orientation.lockToPortrait();
    }

    makeRemoteRequest = () => {
        const url = `http://3.17.60.127:3001/api/instituciones/byTipo?tipo=${this.state.tipo}`;

        fetch(url)
            .then((response) => response.json())
            .then((response)=> {
                this.setState({
                    data: response,
                    error: response.error || null,
                    loading: false,
                  });
                  this.arrayholder = response;
                //   console.warn("In Data: ", this.state.data);
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    }

    searchFilterFunction = text => {
        this.setState({
          value: text,
        });
    
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.nombre.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
        });
    };

    renderHeader = () => {
        return(
          <SearchBar
            lightTheme
            round
            placeholder={"Buscar..."}
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
            style={styles.buscador}
          />
        )
      }

    render(){
        if(this.state.loading){
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={'green'} />
                </View>
            );
        }
        return (
            <ImageBackground source={require('../../assets/directorio/pantalla2/fondop2.png')} style={styles.fondoimage} resizeMode={'cover'}>
                <Image source={require('../../assets/directorio/pantalla5/Recurso2p5.png')} style={{position:'absolute', width:120, height:120, right:'-12%',top:'-14.5%'}}/>
                <Image source={require('../../assets/directorio/pantalla5/Recurso1p5.png')} style={{position:'absolute', width:100, height:100, top:'-10%',left:'-15%'}}/>
                <Image source={require('../../assets/directorio/pantalla5/Recurso4p5.png')} style={{position:'absolute', width:108, height:110, bottom:'-9%',right:'-12%'}}/>
                <Image source={require('../../assets/directorio/pantalla5/Recurso3p5.png')} style={{position:'absolute', width:108, height:110, bottom:'-7%',left:'-4%'}}/>
                <View style={styles.container}>
                    <View style={styles.containertitulo}>
                        <Image source={require('../../assets/directorio/pantalla5/Recurso5p5.png')} style={styles.logo} resizeMode={'contain'}/>
                    </View>
                    <View style={styles.clasificaciones}>
                       <FlatList
                            data={this.state.data}
                            renderItem={({item, index})=> 
                            <ListUnivesidades
                                nombre={item.nombre}
                                web_id={item.web_id}
                                logo={item.logo}
                                clave_sep={item.clave_sep}
                                colorFondo={colors[index % colors.length]}
                                onPress={() => {this.props.navigation.navigate('DetalleUniversidad', {universidad: item})}}
                            />}
                            keyExtractor={(item, index) => index }
                            ListHeaderComponent={this.renderHeader}
                       />
                    </View>                 
                </View>
            </ImageBackground>
        )
    }
}

let colors = ['#8F44AD','#2A80B9','#16A086','#26AD60','#F29B10', '#C30052', '#18BC9A']

const styles = StyleSheet.create({
    fondoimage:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    containertitulo:{
        marginTop:30,
        marginBottom:20
    },
    texttitulo:{
        textAlign:'center',
        color:'rgba(29,58,108, 1.0)',
        fontFamily:'GothamBold',
        fontSize:20
    },
    clasificaciones:{
        height:'70%',
        width:'90%',
        justifyContent:'center',
        marginBottom:'8%',
    },
    boton:{
        flexDirection:'row',
        height:40,
        width:'80%',
        marginBottom:30,
        alignItems:"center"
    },
    textboton:{
        marginLeft:'10%',
        color:'#fff',
        fontFamily:'GothamBold',
        fontSize:17
    },
    icono: {
        marginRight:'5%',
        marginLeft:'5%',
        width:35,
        height:30
    },
    logo:{
        width:230,
        height:120
    },
    buscador: {
        borderColor: 'rgba(2,2,53, 1.0)',
        borderWidth: 2,
        borderRadius: 50,
        marginBottom: 10
    }
})