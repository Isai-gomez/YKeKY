import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Avatar } from 'react-native-elements';

export default class ProfileScreen extends Component {

    render() {
        return (
            <View>
                <Avatar
                    rounded
                    size={'large'}
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    />
                    <Avatar rounded title="MD" />
                    <Avatar rounded icon={{ name: 'home' }} />
                    <Avatar
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                        showEditButton
                        />
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}