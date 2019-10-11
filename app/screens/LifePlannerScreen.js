import React,{Component} from 'react';
import {View,Text,Animated,TouchableOpacity,StyleSheet,Alert,ImageBackground,Dimensions,ScrollView,Image} from 'react-native';
// import Slide from '../components/Slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Orientation from 'react-native-orientation';

var {width, height} = Dimensions.get('window')

const matchAreaByQuestionNumber = require('../lib/questions/MachAreaVida');

const responseQuestionsMap ={
    Uno: 1,
    Dos: 2,
    Tres: 3,
    Cuatro: 4,
    Cinco: 5,
    Seis: 6,
    Siete: 7,
    Ocho: 8,
    Nueve: 9,
    Diez: 10,

}

export default class LifeScreen extends Component {
        static navigationOptions = {
            header:null
        };
        state = {
            index : 0,
            questions :  [
                "¿Cómo se siente en relación a tu salud y disposición?",
                "En relación a su vida social, ¿cómo se siente?",
                "¿Cómo se siente en relación a los hijos? sí tuviera, como se siente en relación a eso?",
                "Con respecto a su vida conyugal, ¿cómo esta?",
                "¿Cómo se siente en relación a sus parientes o familiares?",
                "¿Cómo se siente en relación a sus espiritualidad?",
                "¿Cómo se siente en relación a su situación sentimental?",
                "Con relacion a su vida profesional, ¿cómo se siente?",
                "¿Cómo se siente en relación a su ambiente laboral?",
                "¿Cómo se siente usted relacionado a sus recursos finacieros?",
                "¿Cómo se siente en relación a su desenvolvimiento intelectual?",
                "¿Cómo se siente usted con relación a su comunicación social?",
            ],
            answers : ["Muy mal","Mal","Bien","Muy Bien"],
            animation: new Animated.Value(0),
            progress: new Animated.Value(0),
            respuestas:[]
        }
    
        componentDidMount(){
            Orientation.lockToPortrait();
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

        sendResponse = () => {
            const preguntas = [...this.state.respuestas]
            const answer = ''
            const link = 'http://3.15.183.131:3001/api/lp_answers'

            fetch(link, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_answer_lp: answer,
                    answer_lp: preguntas,
                    userId: 1
                }),
              })
              .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.then = true){
                    this.props.navigation.navigate('ResultLP')
                    }
                })
                .catch((error) => {
                console.error(error);
                });                      
        } 
        
        handleAnswer = () => {
            Animated.parallel([
                Animated.timing(this.state.progress, {
                   toValue: this.state.index + 1,
                   duration:400,
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

        sendRespuestas = ( answerIndex, questionIndex) =>{
            
            console.log( 'Unresolved:', this.state.respuestas)

            this.saveResponse(  answerIndex, questionIndex );

            setTimeout(()=>{
                console.log( 'Resolved:', this.state.respuestas)
            }, 400);
        }
        
        funsionCombinada =(answerIndex, questionIndex) => {
            this.handleAnswer();
            this.sendRespuestas(answerIndex,questionIndex);
        }
    

    render() {
        const { questions, index } = this.state;

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
            Alert.alert(
                'Plan de vida',
                'Ha terminado las preguntas',
                [{
                    text: 'OK', 
                    onPress :() => {this.sendResponse}
                }]
            );
            // this.props.navigation.navigate("ResultLP")
        }     


      
        return (
            <ImageBackground source={require('../assets/planVida/fondoPlan.png')} style={{width:width,height:height}} resizeMode={'cover'}>
                  <Image source={require('../assets/planVida/cosa.png')} style={{width:300,height:300, position:'absolute',bottom:'-22%',right:'-2%'}}/>
                  <Image source={require('../assets/planVida/superiorR1.png')} style={{width:200, height:200,position:'absolute',top:'-20%',right:0}}/>
                  <Image source={require('../assets/planVida/superiorR2.png')} style={{width:150, height:150,position:'absolute',top:'-18%',left:'-23%'}}/>
                  <View style={styles.container}>
                    <View style={{flex:2,alignItems:'center',justifyContent:'center',width:'90%',marginTop:20}}> 
                        <ImageBackground source={require('../assets/planVida/planR3.png')} style={{width:'100%',height:'70%'}}>
                        <View style={{flex:1,alignItems:'center',marginTop:20}}>    
                                <Animated.Text style={[styles.questionText, mainStyle]}>
                                    {index+1}.- {question}                        
                                </Animated.Text> 
                                <Animated.Text style={[styles.questionText, nextStyle]}>
                                    {index}.- {nextQuestion}
                                </Animated.Text> 
                        </View>   
                        </ImageBackground>                          
                    </View>
                    <View style={{flex:4,flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'wrap',width:'75%',marginTop:-30}}>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Diez , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji1.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>10</Text>
                            </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Nueve , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji2.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Ocho , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji3.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Siete , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji4.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Seis , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji5.png')} style={{width:50,height:50}} resizeMode={'contain'}/>
                            <Text style={styles.optionText}>6</Text>
                            </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Cinco , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji6.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Cuatro , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji7.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Tres , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji8.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Dos , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji9.png')} style={{width:50,height:50}}  resizeMode={'contain'}/>
                            <Text style={styles.optionText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {this.funsionCombinada(responseQuestionsMap.Uno , index)}}
                            style={styles.option}
                            >
                            <Image source={require('../assets/planVida/emojis/emoji10.png')} style={{width:50,height:50}} resizeMode={'contain'}/>
                            <Text style={styles.optionText}>1</Text>
                        </TouchableOpacity>
                        </View>
                  </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    card : {
        display:'flex',
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
        height:80,
        width:50,
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'stretch',
        marginTop:5,
        marginLeft:18
    },
    yes: {
        backgroundColor: "rgba(255,255,255, .1)"
    },
    optionText: {
        fontSize: 18,
        color: 'rgba(29,58,108, 1.0)',
        marginBottom: 50
    },
    overlay: {
       alignItems: "center",
       justifyContent: "center"
    },
    questionText: {
        position: "absolute",
        fontSize: 17,
        color: "#fff",
        textAlign: "center",
        fontFamily:'GothamBook'
    }
})