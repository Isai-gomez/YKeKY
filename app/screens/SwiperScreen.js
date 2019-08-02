import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(2,2,53, 1.0)' : 'rgba(209, 80, 0, 1.0)';
    } else {
      backgroundColor = selected ? 'rgba(2,2,53, 1.0)' : 'rgba(209, 80, 0, 1.0)';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

export default class SwiperScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ImageBackground source={require('../assets/screen1.png')} style={{width:'100%',height:'100%'}}>
            <Onboarding
                DotComponent={Square}
                onDone={() => this.props.navigation.navigate('Login')}
                onSkip={() => this.props.navigation.navigate('Login')}
                nextLabel={'Siguiente'}
                skipLabel={'Saltar'}
                transitionAnimationDuration={400}
                pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/imagenSlider1.png')} style={{height:200, width: 200}} />,
                    title: 'ENCUENTRA LA CARRERA QUE BUSCAS',
                    subtitle: 'Haciendo nuestro Test Vocacional encuentra lo que te gusta',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('../assets/imagenSlider2.png')} style={{height:200, width: 200, resizeMode: 'contain'}} />,
                    title: 'DESCUBRE TUS HABILIDADES',
                    subtitle: 'Haciendo nuestro Test Vocacional encuentra lo que te gusta',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={require('../assets/imagenSlider3.png')} style={{height:200, width: 200}} />,
                    title: 'PLANEA TU VIDA',
                    subtitle: "Haciendo nuestro Life Planner",
                },
                ]}
            />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})