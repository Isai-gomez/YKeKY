import React, { Component } from 'react';
import {View,Text,Image,ImageBackground,Dimensions,StyleSheet,Animated,TouchableOpacity} from 'react-native';
import Orientation from 'react-native-orientation';

let {width,height} = Dimensions.get('window');

const matchAreaByQuestionNumber = require('../lib/questions/matchAreaByQuestionNumber');

const responseQuestionsMap = {
    Nada: 0,
    Poco: 1,
    Algo: 2,
    Mucho: 3
}

export default class TestVocacionalScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        Orientation.lockToPortrait();
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
        return (
            <ImageBackground source={require('../assets/testVocacional/preguntas/fondo.png')} style={{width: width, height: height}} resizeMode={'cover'} >
                <Image source={require('../assets/testVocacional/preguntas/Recurso1Test.png')} style={{width: 100, height: 100, position: 'absolute', left: '-9%', top:'-5%'}} />
                <Image source={require('../assets/testVocacional/preguntas/Recurso2Test.png')} style={{width: 200, height: 200, position: 'absolute', right: '-2%', top:'-10%'}} />
                <Image source={require('../assets/testVocacional/preguntas/Recurso3Test.png')} style={{width: 350, height: 250, position: 'absolute', right: '0%', bottom:'-25%'}} />
                <View style={styles.container}>
                    <View style={styles.numberContainer}>
                        <ImageBackground source={require('../assets/testVocacional/preguntas/Recurso4Test.png')} style={{width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}} >
                            <Text style={styles.numberText} >{index + 1}</Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.preguntaContainer]}>
                        <ImageBackground source={require('../assets/testVocacional/preguntas/areaPregunta.png')} style={{width: '100%', height: '100%', justifyContent: 'center'}}>
                            <Animated.Text style={[styles.questionText, mainStyle]}>
                                {question}
                            </Animated.Text>
                            <Animated.Text style={[styles.questionText, nextStyle]}>
                                {nextQuestion}
                            </Animated.Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.respuestaContainer}>
                    <TouchableOpacity 
                        onPress={() => {this.functionCombinada( responseQuestionsMap.Nada , index)}}
                        // activeOpacity={.5}
                        style={styles.option}
                    >
                        <Image source={require('../assets/testVocacional/preguntas/Nada.png')} style={styles.imageBoton} />
                        <Text style={styles.optionText}>Nada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {this.functionCombinada(responseQuestionsMap.Poco , index)}}
                        // activeOpacity={.5}
                        style={styles.option}
                    >
                        <Image source={require('../assets/testVocacional/preguntas/Poco.png')} style={styles.imageBoton} />
                        <Text style={styles.optionText}>Poco</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {this.functionCombinada(responseQuestionsMap.Algo, index)}}
                        // activeOpacity={.5}
                        style={styles.option}
                    >
                        <Image source={require('../assets/testVocacional/preguntas/Algo.png')} style={styles.imageBoton} />
                        <Text style={styles.optionText}>Algo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {this.functionCombinada(responseQuestionsMap.Mucho, index)}}
                        // activeOpacity={.5}
                        style={styles.option}
                    >
                        <Image source={require('../assets/testVocacional/preguntas/Mucho.png')} style={styles.imageBoton} />
                        <Text style={styles.optionText}>Mucho</Text>
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
        width: width,
        height: height
        // backgroundColor: 'transparent',
        // flexDirection: "row",
        // justifyContent:'center',
        // alignItems:'center',
    },
    numberContainer: {
        flex: 2.5,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 30
    },
    preguntaContainer: {
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    respuestaContainer: {
        flex: 2.5,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'flex-start',
        top: 30
    },
    numberText: {
        fontFamily: 'GothamBold', 
        fontSize: 32,
        fontWeight: 'bold',
        color: 'rgba(29,58,108, 1)',
    },
    card : {
        display:'flex',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height:'90%',
        width: '90%',
        borderRadius: 5,
        // shadowColor: '#757575',
        // shadowOpacity: .1,
        // shadowOffset: {width:-2 ,height: 4},
        // elevation: 2,
    },
    respuestasContainer:{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
        bottom: '15%',
        // backgroundColor: 'red'
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
        width: 50,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        // backgroundColor: 'blue',
    },
    yes: {
        backgroundColor: "rgba(255,255,255, .1)"
    },
    optionText: {
        fontFamily: 'GothamMedium',
        fontSize: 18,
        color: 'rgba(29,58,108, 1)',
        marginBottom: 50,
    },
    overlay: {
       alignItems: "center",
       justifyContent: "center"
    },
    questionText: {
        fontFamily: 'GothamBook',
        backgroundColor: "transparent",
        position: "absolute",
        fontSize: 16,
        color: "#FFF",
        textAlign: "justify"
    },
    imageBoton:{
        width: 50,
        height: 50
    }
})