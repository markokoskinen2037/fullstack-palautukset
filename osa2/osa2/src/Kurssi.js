import React from 'react';

const Kurssit = ({kurssit}) => {
    return (
        kurssit.map(kurssi =>
            <div key={kurssi.id}>
                <Kurssi kurssi={kurssi}/>
            </div>
        )
        
    )
}



const Kurssi = ({kurssi}) => {
    return (
        <div key={kurssi.id}>
            <h1 key={kurssi.id}>{kurssi.nimi}</h1>
            {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
            <p>yhteensä {tehtavienSumma(kurssi)} tehtävää</p>
        </div>
    )
}


function tehtavienSumma(kurssi) {

    const array = []

    kurssi.osat.forEach(element =>{
        array.push(element.tehtavia)

    })

    var total = array.reduce(function(sum,order) {
        return sum + order

    },0)

    return total;
}

export default Kurssit