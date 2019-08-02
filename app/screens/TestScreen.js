import React,{Component} from 'react';
import {View, Animated, StyleSheet, TouchableOpacity, Dimensions, Image, Alert, Text} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const matchAreaByQuestionNumber = require('../lib/questions/matchAreaByQuestionNumber');

const responseQuestionsMap = {
    Nada:  0,
    Poco:  1,
    Algo:  2,
    Mucho: 3
};

export default class TestScreen extends Component{
    static navigationOptions = {
        title: "Test Vocacional"
    }

    state = {
        index : 0,
        questions :  [
            "Apoyar centros para niños de la calle, gente con discapacidad, adulto mayor",
            "Manejar bases de datos con archivos y registros de una empresa", 
            "Realizar experimentos científicos en un laboratorio", 
            "Dirigir grupos de trabajo como líder dentro de una organización", 
            "Exponer obras de arte en una exposición o museo", 
            "Explicar fenómenos naturales, físicos, químicos o sociales",
            "Actuar en una compañía de teatro o centro de espectáculos",
            "Convencer a la gente para lograr una meta en común",
            "Registrar las finanzas y calcular los impuestos de una empresa",
            "Diseñar o dar mantenimiento a los automóviles y/o motocicletas",
            "Ayudar a las personas con problemas emocionales o de aprendizaje",
            "Dar mantenimiento, reparar o diseñar aparatos electrónicos y mecánicos",
            "Escribir historias, cuentos o novelas para transmitir tus ideas y sentimientos",
            "Convencer a las personas de que adquieran algún producto o servicio",
            "Ser voluntariado para apoyo a personas en un desastre natural",
            "Desarrollar fórmulas o ecuaciones matemáticas para resolver problemas",
            "Elaborar la nómina para pagar a los empleados de una organización",
            "Operar sistemas computacionales y aplicaciones informáticas digitales",
            "Preparar la coreografía de un espectáculo de danza o multimedia",
            "Ser responsable de dirigir un grupo de personas en una empresa",
            "Participar en un despacho dedicado a defender las personas",
            "Crear nuevas teorías tecnológicas y publicar artículos en revistas científicas",
            "Tomar algún instrumento en una orquesta o dirigirla",
            "Asesorar a las personas para que tengan su propia empresa o negocio",
            "Alfabetizar a niños y adultos que no saben leer ni escribir",
            "Ser el responsable de un proyecto de negocios",
            "Enseñar temas y disciplinas académicas a niños, adolescentes o jóvenes",
            "Cantar en una banda, coro, grupo musical u orquesta",
            "Dar mantenimiento a aviones o barcos",
            "Trabajar en hospitales con la salud y el cuidado de los enfermos",
            "Organizar festivales artísticos o eventos culturales",
            "Elaborar informes ejecutivos para los socios de una empresa",
            "Curar a los pacientes que padecen alguna enfermedad o patología",
            "Resolver problemas dentales a las personas con tratamientos y prótesis",
            "Ayudar a la gente a recuperar su bienestar físico, con rehabilitación y terapia",
            "Curar todo tipo de animales: domésticos, para alimentación o reproductivos",
            "Ser un experto en las corrientes humanísticas y filosóficas de la sociedad",
            "Diseñar sistemas y elaborar prototipos o máquinas robóticas para industrias",
            "Conocer de los fenómenos astronómicos, su naturaleza y consecuencias",
            "Desarrollar procesos y tecnologías para mejorar la producción en el campo"
        ],
        answers : ["Nada","Poco","Algo","Mucho"],
        animation: new Animated.Value(0),
        progress: new Animated.Value(0),
        respuestas: []
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
        if(index + 1 < questions.length) {
            nextQuestion = questions[index + 1];
        }else if(index > questions.length-1){
            // console.warn("respuestas", this.state.respuestas)
            // Alert.alert('Ha terminado las preguntas')
            this.props.navigation.navigate('ResultTS', {respuestas: this.state.respuestas})
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

        this.sendRespuestas = ( answerIndex, questionIndex) =>{
            
            console.log( 'Unresolved:', this.state.respuestas)

            this.saveResponse(  answerIndex, questionIndex );

            setTimeout(()=>{
                console.log( 'Resolved:', this.state.respuestas)
            }, 500);
        }

        this.functionCombinada = (answerIndex, questionIndex) => {
          this.handleAnswer();
          this.sendRespuestas(answerIndex, questionIndex);
        }

        return(
            <View style={styles.container}>
            <View style={styles.card}>
                <View style={[StyleSheet.absoluteFill, styles.overlay]}>
                    <Animated.Text style={[styles.questionText, mainStyle]}>
                    {index + 1}.- {question}
                    </Animated.Text>
                    <Animated.Text style={[styles.questionText, nextStyle]}>
                        {index}.- {nextQuestion}
                    </Animated.Text>
                </View>

                <View style={styles.progress}>
                    <Animated.View style={[styles.bar, progressStyle]} />
                </View>
                
                <TouchableOpacity 
                    onPress={() => {this.functionCombinada( responseQuestionsMap.Nada , index)}}
                    activeOpacity={.5}
                    style={styles.option}
                >
                    <Image source={require('../assets/emojis/emoji1.png')} />
                    <Text style={styles.optionText}>Nada</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {this.functionCombinada(responseQuestionsMap.Poco , index)}}
                    activeOpacity={.5}
                    style={styles.option}
                >
                    <Image source={require('../assets/emojis/emoji2.png')} />
                    <Text style={styles.optionText}>Poco</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {this.functionCombinada(responseQuestionsMap.Algo, index)}}
                    activeOpacity={.5}
                    style={styles.option}
                >
                    <Image source={require('../assets/emojis/emoji3.png')} />
                    <Text style={styles.optionText}>Algo</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {this.functionCombinada(responseQuestionsMap.Mucho, index)}}
                    activeOpacity={.5}
                    style={styles.option}
                >
                    <Image source={require('../assets/emojis/emoji4.png')} />
                    <Text style={styles.optionText}>Mucho</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7986CB',
        // flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
    },
    card : {
        display:'flex',
        backgroundColor: '#fff',
        flexDirection: 'row',
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
        backgroundColor: "#F3CE12"
    },
    option: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: 'red'
    },
    yes: {
        backgroundColor: "rgba(255,255,255, .1)"
    },
    optionText: {
        fontSize: 25,
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
        color: "#BDBDBD",
        textAlign: "center"
    }
})