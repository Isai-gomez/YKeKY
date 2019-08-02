import React,{Component} from 'react';
import {View,Text,Animated,TouchableOpacity,Dimensions,StyleSheet,Alert,Image} from 'react-native';
import Slide from '../components/Slider';

const matchAreaByQuestionNumber = require('../lib/questions/MachAreaVida');

export default class LifeScreen extends Component {
        static navigationOptions = {
            title: 'Plan de vida',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        };
        state = {
            index : 0,
            questions :  [
                "¿Cómo te sientes en relación a su salud y disposición?",
                "En relación a su vida social, ¿cómo se siente?",
                "¿cómo te sientes en relación a los hijos? si tuviera, como se siente en relación a eso?",
                "Con respecto a su vida conyugal, ¿cómo esta?",
                "Como se siente en relación a sus parientes o familiares?",
                "Como se sient en relación a sus espitualidad?",
                "Como se siente en relación a su situacion sentimetal?",
                "Con relacion a su vida profecional como se siente?",
                "Como se siente en relacion a su ambiente laboral?",
                "Como se siente usted relacionado a sus recursos finacieros?",
                "Como se siente en relacion a sus desenvolvimiento intelectual?",
                "Como se siente usted con relacion a sus comunicacion social?",

            ],
            answers : ["Muy mal","Mal","Bien","Muy Bien"],
            animation: new Animated.Value(0),
            progress: new Animated.Value(0),
        }
        saveResponse = ( response, questionIndex ) => {
            console.log( 'estado sin act: ', this.state.respuestas );
            
            let currentResponse = {
                respuesta: response,
                areaConocimiento: matchAreaByQuestionNumber( questionIndex )
            };
    
            this.setState({
              respuestas : [ ...this.state.respuestas, currentResponse ]
            });
        
            console.log( 'estado actualizado: ', this.state.respuestas );
        }
    

    render() {
        const { questions, index } = this.state;
        const { width } = Dimensions.get("window");

        const progressInterpolate = this.state.progress.interpolate({
            inputRange: [0, questions.length - 1],
            outputRange: ["0%", "100%"]
        })

        const progressStyle = {
            width: progressInterpolate
        }

        const mainQuestionInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -width]
        })

        const nextQuestionInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [width, 0]
        })

        const mainStyle = {
            transform: [
                {
                    translateX: mainQuestionInterpolate
                }
            ]
        }

        const nextStyle = {
            transform: [
                {
                    translateX: nextQuestionInterpolate
                }
            ]
        }

        const question = questions[index];
        
        let nextQuestion;
        if((index + 1<questions.length) ) {
            nextQuestion = questions[index + 1];
        }else if(index > questions.length-1){
             Alert.alert('Ha terminado las preguntas')
            this.props.navigation.navigate("ResultLP")
        }     


        this.handleAnswer = () => {
            Animated.parallel([
                Animated.timing(this.state.progress, {
                   toValue: this.state.index + 1,
                   duration: 400,
                }),
                Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 400
            })
        ]).start(() => {
                this.setState((state) => {
                    return {
                        index: state.index + 1
                    }
                },() => {
                    this.state.animation.setValue(0)
                })
            });
            
        }
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={[StyleSheet.absoluteFill, styles.overlay]}>
                        <Animated.Text style={[styles.questionText, mainStyle]}>
                            {index+1}.- {question}                        
                        </Animated.Text>
                        <View style={{
                            position: "absolute",
                            left: 0,
                            bottom: 90,
                            right: 0,
                            height: 10,
                        }}>
                            <Animated.View>
                                <Slide
                                
                                />
                            </Animated.View>
                        </View>                        
                    </View> 
                    <View style={styles.progress}>
                        <Animated.View style={[styles.bar, progressStyle]} />
                    </View>
                    <TouchableOpacity 
                            onPress={this.handleAnswer}
                            activeOpacity={.7}
                            style={styles.option}
                        >
                            <Image source={require('../assets/emojis/emoji4.png')} />
                            <Text style={styles.optionText}>Siguiente</Text>
                    </TouchableOpacity>
                    
                </View>                  
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        // flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
    },
    card : {
        display:'flex',
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height:'90%',
        width: '90%',
        borderRadius: 5,
        shadowColor: '#757575',
        shadowOpacity: .1,
        shadowOffset: {width:-2 ,height: 4},
        elevation: 2,
    },
    progress:{
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 10,
    },
    bar: {
        height: "100%",
        backgroundColor: "darkorange"
    },
    option: {
        height:'10%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'stretch'
    },
    yes: {
        backgroundColor: "rgba(255,255,255, .1)"
    },
    optionText: {
        fontSize: 18,
        color: "#BDBDBD",
        marginBottom: 50
    },
    overlay: {
       alignItems: "center",
       justifyContent: "center"
    },
    questionText: {
        backgroundColor: "transparent",
        position: "absolute",
        fontSize: 20,
        color: "black",
        textAlign: "center"
    }
})