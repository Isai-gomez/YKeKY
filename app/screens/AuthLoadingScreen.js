import React,{Component} from 'react';
import {View,Text,ActivityIndicator,StatusBar,StyleSheet,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this._loadData();
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.getUser();
    //     }, 2000); 
    // }

    _loadData = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        // Alert.alert("IsLoggedIn: " + isLoggedIn);
        setTimeout(() => {this.props.navigation.navigate(isLoggedIn !== '1'? 'AuthNavigator': 'AppNavigator')}, 1000);
    }

    // getUser(){
    //     let user = await AsyncStorage.getItem()
    //     if(this.state.usuario !== ''){
    //         this.props.navigation.navigate("AppNavigator");
    //     }else{
    //         this.props.navigation.navigate("AuthNavigator");
    //     }
    // }

    render(){
        return(
            <View style={styles.container}>
                <Text>Cargando...</Text>
                <ActivityIndicator size={75} color="rgba(2,2,53, 1.0)" />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})