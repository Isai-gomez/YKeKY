const QuestionsByArea = [
    { Familiar: new Array( 10, 12, 18, 29, 38, 40) },
    { Conyugal: new Array(2, 4, 8, 9, 14, 17, 20, 24, 26, 32) },
    { Hijos: new Array(3, 6, 16, 22, 39) },
    { Social: new Array(5, 7, 13, 19, 23, 28, 31, 37) },
    { Salud: new Array(11, 21, 25, 27) },
    { Servir: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Intelectual: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Trabajo: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Financiera: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Profesional: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Emocional: new Array(1, 15, 30, 33, 34, 35, 36) },
    { Espiritual: new Array(1, 15, 30, 33, 34, 35, 36) }
];

count = {
    Ing: 0,
    EAd: 0,
    CBE: 0,
    Hum: 0,
    CSo: 0,
    CDS: 0
}

function matchAreaByQuestionNumber( index ) {
   
    let areaQuestion;

    QuestionsByArea.map( ( area, key )=>{
        Object.entries( area ).forEach( ( [ keyArea, valueArea ] )=>{
            console.log( 'array: ', key, valueArea, keyArea,  QuestionsByArea[ key ][ keyArea ] );
            if ( QuestionsByArea[ key ][ keyArea ].includes( index + 1 ) ) {
                areaQuestion = keyArea;
            }
        })
        
    })

    return areaQuestion;

}

module.exports = matchAreaByQuestionNumber;
