import React,{Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class UniversidadBox extends Component {

    render() {

        const {image, name, page, direccion} = this.props.universidad

        return (
                <View style={styles.artistbox}>
                    <Image 
                        source={{uri: image}}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Icon name="globe" size={30} color="lightgray" />
                                <Text style={styles.count}>{page}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Icon name="map" size={30} color="lightgray" />
                                <Text style={styles.count}>{direccion}</Text>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 150, 
        width: 150,
    },
    artistbox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: 'Roboto',
        marginTop: 10,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 15,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    count: {
        color: 'gray'
    }
});