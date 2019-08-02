import React,{Component} from 'react';
import {View,Text,ActivityIndicator,StatusBar,StyleSheet} from 'react-native';

export default class AuthLoadingScreen extends Component{
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        setTimeout(() => {
            this.getUser();
        }, 2000); 
    }

    getUser(){
        if(false){
            this.props.navigation.navigate("AppNavigator");
        }else{
            this.props.navigation.navigate("AuthNavigator");
        }
    }

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