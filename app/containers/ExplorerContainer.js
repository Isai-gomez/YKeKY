import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import colors from '../styles/colors';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import categoriesList from '../data/categories';
import listings from '../data/listings';

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
      };
    }

    render(){
        this.arrayholder = [];
        return(
            <View style={styles.wrapper}>
                <SearchBar />
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
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/2.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/3.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/4.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/5.jpg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cardItems}
                  >
                    <View style={{flexWrap: 'wrap', height: 100}}>
                        <Image source={require('../assets/6.jpeg')} style={{width: 100, height: 100}} />
                        <Text style={styles.textItem}>Centro de Especialización Judicial</Text>
                        <Text></Text>
                        <Text style={styles.textItem}>Avenida 27 de febrero 1823,Atasta Serra, villahermosa Tabasco,México.</Text>
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
        marginBottom: 15
    },
    textItem: {
        color: '#000000',
        textAlign: 'justify'
    }
  });