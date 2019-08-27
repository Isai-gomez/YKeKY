import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Animated} from 'react-native';

const images = {
    screen1: require('../assets/imagenSlider1.png'),
    screen2: require('../assets/imagenSlider2.png'),
    screen3: require('../assets/imagenSlider3.png')
}

const backgrounds = [
    {
        title: 'Bienvenido1',
        description: 'jaofajfjoajf1',
        img: images.screen1
    },
    {
        title: 'Bienvenido2',
        description: 'jaofajfjoajf2',
        img: images.screen2
    },
    {
        title: 'Bienvenido3',
        description: 'jaofajfjoajf3',
        img: images.screen3
    },
]

export default class SwiperScreen2 extends Component {
    static navigationOptions = {
        header: null
    }

    scrollX = new Animated.Value(0);

    state = {
        slideIndex: 0
    };

    componentDidMount(){
        this.scrollX.addListener(({value}) => {
            this.setState({slideIndex: Math.floor(value / SIZE.width)})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Swiper2</Text>
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