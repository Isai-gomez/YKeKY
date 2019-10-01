import AsyncStorage from '@react-native-community/async-storage';

const QuestionsByArea = [
    { Ingenieria: new Array( 10, 12, 18, 29, 38, 40) },
    { EconomicoAdministrativo: new Array(2, 4, 8, 9, 14, 17, 20, 24, 26, 32) },
    { CienciasBasicasExactas: new Array(3, 6, 16, 22, 39) },
    { Humanidades: new Array(5, 7, 13, 19, 23, 28, 31, 37) },
    { CienciasSociales: new Array(11, 21, 25, 27) },
    { CienciasDeLaSalud: new Array(1, 15, 30, 33, 34, 35, 36) }
];

count = {
    Ingenieria: 0,
    EconomicoAdministrativo: 0,
    CienciasBasicasExactas: 0,
    Humanidades: 0,
    CienciasSociales: 0,
    CienciasDeLaSalud: 0
}

function matchAreaByQuestionNumber( index ) {
   
    let areaQuestion;

    QuestionsByArea.map(( area, key )=>{
        Object.entries( area ).forEach( ( [ keyArea, valueArea ] )=>{
            console.log( 'array: ', key, valueArea, keyArea,  QuestionsByArea[ key ][ keyArea ] );
            if ( QuestionsByArea[ key ][ keyArea ].includes( index + 1 ) ) {
                areaQuestion = keyArea;
				switch(keyArea){
                    case ('Ingenieria') : 
                        count.Ingenieria +=1
                        console.log("Es Ingenieria"); 
                        break;
                    case ('EconomicoAdministrativo') : 
                        count.EconomicoAdministrativo +=1
                        console.log("Es EconomicoAdministrativo"); 
                        break;
                    case ('CienciasBasicasExactas') :
                        count.CienciasBasicasExactas +=1 
                        console.log("Es CienciasBasicasExactas"); 
                        break;
                    case ('Humanidades') : 
                        count.Humanidades += 1
                        console.log("Es Humanidades"); 
                        break;
                    case ('CienciasSociales') :
                        count.CienciasSociales += 1 
                        console.log("Es CienciasSociales"); 
                        break;
                    case ('CienciasDeLaSalud') :
                        count.CienciasDeLaSalud += 1 
                        console.log("Es CienciasDeLaSalud"); 
                        break;
                    default : 
                        console.log("Error"); 
                        break;
				}
            }
        })
        
    })

    return areaQuestion;

}

module.exports = matchAreaByQuestionNumber;