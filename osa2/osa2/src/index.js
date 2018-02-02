import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
          osat: [
            {
              nimi: 'Reactin perusteet',
              tehtavia: 10,
              id: 1
            },
            {
              nimi: 'Tiedonvälitys propseilla',
              tehtavia: 7,
              id: 2
            },
            {
              nimi: 'Komponenttien tila',
              tehtavia: 14,
              id: 3
            }
          ]
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
      ]
  
    return (
      <div>
          <h1>Opetusohjelma</h1>
        <Kurssit kurssit={kurssit}/>
      </div>
    )
  }

const Kurssit = ({kurssit}) => {
    return (
        kurssit.map(kurssi =>
            <div>
                <Kurssi kurssi={kurssi}/>
            </div>
        )
        
    )
}


const Kurssi = ({kurssi}) => {
    return (
        <div>
            <h1>{kurssi.nimi}</h1>
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









ReactDOM.render(<App />, document.getElementById('root'));
