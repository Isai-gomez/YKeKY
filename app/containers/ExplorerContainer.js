import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import colors from '../styles/colors';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import categoriesList from '../data/categories';
import listings from '../data/listings';
import ModalComponent from '../components/ModalComponent';

// top
// ESTADO
// CIUDAD

export default class ExplorerContainer extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(){
      super();
      this.state = {
        loading: false,      
        data: [],      
        error: null, 
        loadingVisible: false,
        isModalVisible: false,
      };
    }
    toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };


    render(){
        this.arrayholder = [];
        return(
            <View style={styles.wrapper}>
                <SearchBar onPressFilter={this.toggleModal} />
                <ModalComponent isModalVisible={this.state.isModalVisible} onBackButtonPressModal={this.toggleModal}/>
                <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollViewContent}
                >
                <Text style={styles.heading}>
                    Explore YKeKY
                </Text>
                <View style={styles.categories}>
                    <Categories categories={categoriesList} />
                </View>
                <View>
                <Text style={styles.heading}>
                    Ranking
                </Text>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/1.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}> Av. Gregorio Méndez Magaña, Cuadrante II</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/2.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CEIBA - Centro de Estudios e Investigación de las Bellas Artes</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Periférico Carlos Pellicer Cámara</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/3.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CINDEHU - Centro de Investigación de Desarrollo Humano de Tabasco A.C.</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Fortuna Nacional</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/4.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CUMC – Centro Universitario Colegio México del Sureste</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Av. Paseo de la Sierra</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/5.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CIPAC - Centro Internacional de Posgrado</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Plaza Paretto, Av. 27 de Febrero, esquina Niños Héroes</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/6.jpeg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>CP - Colegio de Postgraduados Campus Tabasco</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Periférico</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.white,
    },
    scrollview: {
      paddingTop: 100,
    },
    scrollViewContent: {
      paddingBottom: 80,
    },
    categories: {
      marginBottom: 40,
    //   backgroundColor: 'yellow'
    },
    heading: {
      fontSize: 22,
      fontWeight: '600',
      paddingLeft: 20,
      paddingBottom: 20,
      color: colors.gray04,
    },
    cardItems: {
        backgroundColor: 'rgba(206,208,206, 0.2)',
        flex: 1,
        marginBottom: 15,
        marginHorizontal: 10,
    },
    textItem: {
        color: '#000000',
        textAlign: 'justify'
    }
  });