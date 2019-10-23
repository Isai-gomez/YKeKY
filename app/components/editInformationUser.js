import React,{Component} from 'user';
import {View, TextInput} from 'react-native';

export default class editInformationUser extends Component{
    render(){
        return(
            <View>
                <TextInput 
                    placeholder={'Ingrese su nombre'}

                />
            </View>
        );
    }
}