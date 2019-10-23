import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,ImageBackground,Button,Alert,Linking} from 'react-native';
import ModalExample from '../components/Modal';
import Orientation from 'react-native-orientation';
import axios from 'axios';
import {openLinkWithInAppBrowser} from '../helpers';
import Share from 'react-native-share';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../assets/directorio/pantalla6/logopantalla6.png')}
          style={{ width: 90, height: 30 }}
          resizeMode={'contain'}
        />
      );
    }
  }

const HerramientaComponent = (arg) =>(
    <TouchableOpacity>
        <Text>HerramientaComponent{arg}</Text>
    </TouchableOpacity>
);

export default class universidadVistaDetalle extends Component {
    static navigationOptions =
    {    
        headerTitle:<LogoTitle/>,
        headerStyle: {
            backgroundColor: 'transparent',
          },
        headerTitleStyle: {
            color:'#fff',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        headerTintColor:'#fff',
        tintStyle:{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        headerTransparent: true,
        visible: false
    }

    componentDidMount(){
        Orientation.lockToPortrait();
        // this.obtenerWeb(this.state.identificador_web);
        this.makeRequestIdDireccion(this.stateUniversidad.idDireccion);
    }

    constructor(props){
        super(props);
        this.stateUniversidad = {
            idUniversidad: this.props.navigation.state.params.universidad.id_universidad,
            clave_sep: this.props.navigation.state.params.universidad.clave_sep,
            nombre: this.props.navigation.state.params.universidad.nombre,
            mision: this.props.navigation.state.params.universidad.mision,
            logo: this.props.navigation.state.params.universidad.logo,
            icono: this.props.navigation.state.params.universidad.icono,
            fachada: this.props.navigation.state.params.universidad.fachada,
            longitud: this.props.navigation.state.params.universidad.longitud,
            latitud: this.props.navigation.state.params.universidad.latitud,
            idWeb: this.props.navigation.state.params.universidad.web_id,
            idTipo: this.props.navigation.state.params.universidad.tipo_id,
            idContacto: this.props.navigation.state.params.universidad.contacto_id,
            idDireccion: this.props.navigation.state.params.universidad.direccion_id,
            portal: null,
            facebook: null,
            twitter: null,
            instagram: null,
            linkedin: null,
            youtube: null,
            email: null,
            telefono: null,
            calle: null,
            copost: null,
            colonia: null,
            ciudad: null
        }
        this.state = {
            titulo : 'NombreUniveridad',
            visible: false,
            portal: null,
            facebook: null,
            twitter: null,
            instagram: null,
            linkedin: null,
            youtube: null,
            WebData: [],
            telefono: null,
            email: null,
            identificador_web: null,
            identificador_direccion: null,
            identificador_contacto: null,
            calle: null,
            copost: null,
            colonia: null,
            ciudad: null
        }
    }

    componentDidMount(){
        this.obtenerWeb(this.stateUniversidad.idWeb);
        this.obtenerFacebook(this.stateUniversidad.idWeb);
        this.obtenerInstagram(this.stateUniversidad.idWeb);
        this.obtenerTwitter(this.stateUniversidad.idWeb);
        this.obtenerTelefono(this.stateUniversidad.idContacto);
        this.obtenerCorreo(this.stateUniversidad.idContacto);
    }

    makeRequestIdDireccion(idDireccion){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byDireccion?direccion=${idDireccion}`)
        .then((response) => {
            this.setState(({
                calle: response.data[0].calle,
                colonia: response.data[0].colonia
            }))
        })
        .catch((error) => {
            console.warn("Error en Contacto: ", error);
        })
    }

    obtenerWeb(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byWebsite?website=${id}`)
        .then(response => {
            this.setState({
                portal: response.data[0].portal        
            });
            console.log("Dataaa: ", this.state.portal);
            // openLinkWithInAppBrowser(this.state.portal);

        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerFacebook(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byWebsite?website=${id}`)
        .then(response => {
            this.setState({
                facebook: response.data[0].facebook      
            });
            console.log("Dataaa: ", this.state.facebook);
            // openLinkWithInAppBrowser(this.state.facebook);

        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerInstagram(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byWebsite?website=${id}`)
        .then(response => {
            if ((response.data[0].instagram) == ""){
                this.setState({instagram:null})
            }else{
                this.setState({instagram:response.data[0].instagram})
            }
            console.log("Data iNSTAGRAM: ", this.state.instagram);
        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerTwitter(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byWebsite?website=${id}`)
        .then(response => {
            if((response.data[0].twitter)==""){
                this.setState({twitter:null})
            }else{
                this.setState({ twitter: response.data[0].twitter})
            }
            console.log("Data Twitter: ", this.state.twitter);
            // {this.state.twitter == "" ? Alert.alert("No disponible") : openLinkWithInAppBrowser(this.state.twitter)};
            

        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerTelefono(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byContacto?Contacto=${id}`)
        .then(response => {
            this.setState({
                telefono: response.data[0].telefono        
            });
            console.log("Dataaa: ", this.state.telefono);
            // Linking.openURL(`tel:${this.state.telefono}`);
        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerCorreo(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byContacto?Contacto=${id}`)
        .then(response => {
            this.setState({
                email: response.data[0].email        
            });
            console.log("Dataaa: ", this.state.email);            
            // Linking.openURL(`mailto:${this.state.email}`);
        })
        .catch(error => {
            console.log(error);
        });
    }

    obtenerCalleColonia(id){
        axios.get(`http://3.17.60.127:3001/api/instituciones/byContacto?Contacto=${id}`)
        .then(response => {
            this.setState({
                email: response.data[0].email        
            });
            console.log("Dataaa: ", this.state.email);
            if (this.state.email==null){
                Alert.alert('no dispoible');
            }
            else{
                 Linking.openURL(`mailto:${this.state.email}`)
            }
           
        })
        .catch(error => {
            console.log(error);
        });
    }

    toggleModal = () => {
        this.setState({visible: !this.state.visible});
    }
    // Open Herramientas
    openPortal(){
        openLinkWithInAppBrowser(this.state.portal);
    }
    OpenCorreo(){
        Linking.openURL(`mailto:${this.state.email}`);
    }
    OpenTelefono(){
        Linking.openURL(`tel:${this.state.telefono}`);
    }
    OpenFacebook(){
        openLinkWithInAppBrowser(this.state.facebook);
    }
    OpenTwitter(){
        openLinkWithInAppBrowser(this.state.twitter);
    }
    OpenInstagram(){
        openLinkWithInAppBrowser(String(this.state.instagram));
        console.log(this.state.instagram)
    }
    
    
    rendermap= () =>{
        if(this.stateUniversidad.longitud){
            return <TouchableOpacity style={styles.herramienta} onPress={()=>{Linking.openURL(`geo:${this.stateUniversidadlatitud},${this.stateUniversidadlongitud}?q=${this.stateUniversidad.nombre}`)}}><Image source={require('../assets/directorio/pantalla6/mapa.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
        }else if (this.stateUniversidadlongitud = null){
            return null
        }  
    }
    rendercorreo =(id)=> {
        if(this.state.email){
           return <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerCorreo(id);this.OpenCorreo()}}><Image source={require('../assets/directorio/pantalla6/correo.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
        }
        else if(this.state.email=null){
            return null
        }
    }
    renderWeb = (id) => {
        if(this.state.portal){
            return <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerWeb(id);this.openPortal()}}><Image source={require('../assets/directorio/pantalla6/pagina.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
         }
         else if(this.state.portal=null){
             return null
         }
    }
    renderTelefono = (id) => {
        if(this.state.telefono){
            return  <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerTelefono(id);this.OpenTelefono()}}><Image source={require('../assets/directorio/pantalla6/marcar.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
         }
         else if(this.state.telefono=null){
             return null
         }
    }
    renderFacebook = (id) => {
        if(this.state.facebook){
            return <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerFacebook(id);this.OpenFacebook()}}><Image source={require('../assets/directorio/pantalla6/facebook.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
         }
         else if(this.state.facebook=null){
             return null
         }
    }
    renderTwitter = (id) => {
        if(this.state.twitter){
            return  <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerTwitter(id);this.OpenTwitter()}}><Image source={require('../assets/directorio/pantalla6/twitter.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
         }
         else if(this.state.twitter=null){
             return null
         }
    }
    renderInstagram = (id) => {
        if(this.state.instagram){
            return <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerInstagram(id);this.OpenInstagram()}}><Image source={require('../assets/directorio/pantalla6/instagram.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
         }
         else if(this.state.instagram=null){
             return null
         }
    }


    render() {
        return (
            <ImageBackground source={require('../assets/directorio/pantalla2/fondop2.png')} style={{flex:1}}>
            <Image source={require('../assets/directorio/pantalla6/pantalla6r9.png')} style={{width:80, height:150,position:'absolute',bottom:'5%',left:'-12%'}} />            
            <Image source={require('../assets/directorio/pantalla6/pantalla6r10.png')} style={{width:100, height:100,position:'absolute',bottom:'15%',right:'-15%'}} />
            <ScrollView style={styles.container}>
            <Image source={require('../assets/directorio/pantalla6/pantalla6r11.png')} style={{width:100, height:100,position:'absolute',top:'0%',right:'0%'}} />
                <View style={styles.containerimg}>
                    <ImageBackground
                        source={{uri:this.stateUniversidad.fachada}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
                <View style={styles.contenido}>
                    <View style={styles.logocontainer}>
                        <Text style={{fontFamily: 'GothamBold',width:'70%',color:'rgba(29,58,108, 1.0)'}}>{this.stateUniversidad.nombre}</Text>
                        <Image
                            source={{uri:this.stateUniversidad.logo}}
                            style={{width:100,height:100,bottom:0,borderRadius:100,borderWidth:2, borderColor:'#ccc',position:'absolute',right:0}}
                        />
                    </View>
                    <View style={styles.contherramientas}>
                        {/* <TouchableOpacity style={styles.herramienta} onPress={()=>{Linking.openURL(`geo:${this.stateUniversidadlatitud},${this.stateUniversidadlongitud}?q=${this.stateUniversidad.nombre}`)}}><Image source={require('../assets/directorio/pantalla6/mapa.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerWeb(this.stateUniversidad.idWeb)}}><Image source={require('../assets/directorio/pantalla6/pagina.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerTelefono(this.stateUniversidad.idContacto)}}><Image source={require('../assets/directorio/pantalla6/marcar.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerFacebook(this.stateUniversidad.idWeb)}}><Image source={require('../assets/directorio/pantalla6/facebook.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerTwitter(this.stateUniversidad.idWeb)}}><Image source={require('../assets/directorio/pantalla6/twitter.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerInstagram(this.stateUniversidad.idWeb)}}><Image source={require('../assets/directorio/pantalla6/instagram.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.herramienta} onPress={()=>{this.obtenerCorreo(this.stateUniversidad.idContacto)}}><Image source={require('../assets/directorio/pantalla6/correo.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/></TouchableOpacity> */}
                        {this.rendermap()}
                        {this.renderWeb(this.stateUniversidad.idWeb)}
                        {this.renderTelefono(this.stateUniversidad.idContacto)}
                        {this.renderFacebook(this.stateUniversidad.idWeb)}
                        {this.renderTwitter(this.stateUniversidad.idWeb)}
                        {this.renderInstagram(this.stateUniversidad.idWeb)}
                        {this.rendercorreo(this.stateUniversidad.idContacto)}

                    <TouchableOpacity style={styles.herramienta}
                        onPress={()=>{Share.open({title:'Ykeky App',message:'Comparte Ykeky', url:'www.ykeky.com.mx'})}}
                        >
                        <Image source={require('../assets/directorio/pantalla6/compartir.png')} style={{height:50,width:50,margin:3}} resizeMode={"contain"}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderColor:'rgba(29,58,108, 1.0)', borderWidth:2}}>               
                        <Text style={styles.textSub}>Clave de la SEP:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{this.stateUniversidad.clave_sep}</Text>
                        <Text style={styles.textSub}>Calle:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{this.state.calle}</Text>
                        <Text style={styles.textSub}>Colonia:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{this.state.colonia}</Text>
                        <Text style={styles.textSub}>Misión:</Text>
                        <Text style={{fontFamily: 'GothamBook'}}>{this.stateUniversidad.mision}</Text>
                        
                        {/* {this.state.linkedin == null ? (<Text>Nulo</Text>): (<Text>No nulo</Text>)} */}

                        <View style={{flexDirection:"row",margin:3}}>

                            <ModalExample visible={this.state.visible} close={this.toggleModal}/>
                            {/* <Button
                                onPress={this.toggleModal}
                                title="Contacto"
                                color="#FFD549"
                                style={{margin:3}}
                            /> */}
                            </View> 
                    </View>
                </View> 
            </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    map: {
      flex:1,
      height:'100%',
      width:'100%'
    },
    containerimg:{
        height: 270,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    container:{
        flex:1,
    },
    logocontainer:{
        height: 50,
        backgroundColor:'#fff',
        borderBottomColor:'rgba(29,58,108, 1.0)',
        borderBottomWidth:2
    },
    contenido:{
        padding:8,
        marginLeft:8,
        marginRight:8,
        flex:2,
        backgroundColor:"#fff",
        marginTop:'-20%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    containermap:{
        marginLeft:8,
        marginRight:8,
        height:300,
        backgroundColor:'#fff',
        marginTop:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    contherramientas:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:120,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        margin: 25,
        // backgroundColor:'rgba(2,2,53, 1.0)',
        borderRadius: 8
    },
    herramienta:{
        // borderColor:'rgba(29,58,108, 1.0)',
        backgroundColor:'rgba(29,58,108, 1.0)',
        margin: 2,
        borderRadius: 8,
        // backgroundColor:'#ccc'
    },
    textSub:{
        fontFamily: 'GothamBold',
        color:'rgba(29,58,108, 1.0)'
    }
  });