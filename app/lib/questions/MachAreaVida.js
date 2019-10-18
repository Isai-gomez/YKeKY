const QuestionsByArea = [
    { Familiar: new Array(5)},
    { Conyugal: new Array(4)},
    { Hijos: new Array(3)},
    { Social: new Array(2)},
    { Salud: new Array(1)},
    { Servir: new Array(12)},
    { Intelectual: new Array(11)},
    { Trabajo: new Array(9)},
    { Financiera: new Array(10)},
    { Profesional: new Array(8)},
    { Emocional: new Array(7)},
    { Espiritual: new Array(6)}
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
