import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Linking,Alert,Image} from 'react-native'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import ModalDashBoard from '../components/ModalDashBoardFilter';

export default class DashboarHomeScreen extends Component {
    constructor(){
        super();
        this.state = {
                search: '',
                isModalVisible: false,
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

    updateSearch = search => {
        this.setState({ search });
    };

    async openLink() {
        try {
          const url = 'https://www.becas.sep.gob.mx/'
          if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.open(url, {
              // iOS Properties
              dismissButtonStyle: 'cancel',
              preferredBarTintColor: '#020235',
              preferredControlTintColor: 'white',
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'overFullScreen',
              modalTransitionStyle: 'partialCurl',
              modalEnabled: true,
              // Android Properties
              showTitle: true,
              toolbarColor: '#020235',
              secondaryToolbarColor: 'black',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: false,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
              },
              headers: {
                'my-custom-header': 'my custom header value'
              }
            })
            // Alert.alert(JSON.stringify(result))
          }
          else Linking.openURL(url)
        } catch (error) {
          Alert.alert(error.message)
        }
      }

    render() {
        const { search } = this.state;
        return (
            <View>
                <ModalDashBoard isModalVisible={this.state.isModalVisible} onBackButtonPressModal={this.toggleModal} />
                <View>
                    <SearchBar
                        placeholder="Buscar..."
                        onChangeText={this.updateSearch}
                        value={search}
                        round={true}
                    />
                    <TouchableOpacity 
                    style={{borderColor: 'lightgray', borderWidth: 2, width: 50, borderRadius: 50, right: -300, marginTop:5}}
                    onPress={this.toggleModal}
                    >
                        <Text>+filtros</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20,textAlign: 'justify', marginHorizontal: 10}}>Herramientas</Text>
                </View>
                <ScrollView
                        // contentContainerStyle={styles.wrapper}
                        horizontal
                        showHorizontalScrollIndicator={false}
                >
                <View style={styles.card}>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Instruccion_Ts")}}
                            >
                            <Text><Icon name='user-graduate' size={50} color="black" /></Text>
                            <Text  style={{fontSize:15}} >
                                Test Vocacional
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Instruccion_Lp")}}
                            >
                            <Text><Icon name='hand-holding-heart' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Plan de Vida
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita}
                            onPress={() => {this.props.navigation.navigate("Directorio")}}
                            >
                            <Text><Icon name='atlas' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                Directorio
                            </Text>
                            <Text style={{fontSize:15}}>
                                Escolar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> {this.openLink()}} >
                            <Text><Icon name='edit' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                               Becas
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> Linking.openURL('https://www.16personalities.com/es') } >
                            <Text><Icon name='users' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                                16personalities
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cartita} onPress={ ()=> {this._logout()} } >
                            <Text><Icon name='power-off' size={50} color="black"/></Text>
                            <Text style={{fontSize:15}}>
                               Salir
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Text style={{fontSize: 20, marginHorizontal:10}}>Universidades Top</Text>
                    <View style={{paddingHorizontal: 10}}>
                            <TouchableOpacity 
                            style={styles.cardItems}
                        >
                            <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                                <Image source={require('../assets/1.jpg')} style={{width: 100, height: 100}} />
                                <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                                <Text></Text>
                                <Text style={styles.textItem}> Av. Gregorio Méndez Magaña.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cardItems}
                        >
                            <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                                <Image source={require('../assets/2.jpg')} style={{width: 100, height: 100}} />
                                <Text style={styles.textItem}>CEIBA - Centro de Estudios </Text>
                                <Text style={styles.textItem}> e Investigación de las Bellas Artes</Text>
                                <Text style={styles.textItem}>Periférico Carlos Pellicer Cámara</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.cardItems}
                        >
                            <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                                <Image source={require('../assets/3.jpg')} style={{width: 100, height: 100}} />
                                <Text style={styles.textItem}>CINDEHU - Centro de Investigación </Text>
                                <Text style={styles.textItem}> de Desarrollo Humano de Tabasco</Text>
                                <Text style={styles.textItem}>Fortuna Nacional</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                  {/* <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                        <Image source={require('../assets/4.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CUMC – Centro Universitario Colegio México del Sureste</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Av. Paseo de la Sierra</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                        <Image source={require('../assets/5.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CIPAC - Centro Internacional de Posgrado</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Plaza Paretto, Av. 27 de Febrero, esquina Niños Héroes</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100, paddingHorizontal: 10}}>
                        <Image source={require('../assets/6.jpeg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CP - Colegio de Postgraduados Campus Tabasco</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Periférico</Text>
                    </View>
                  </TouchableOpacity>    */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    cartita: {
        alignItems:"center",
        justifyContent: 'center',
        width: 130,
        height: 170,
        backgroundColor: '#fff',
        margin: 15,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,       
    },
})