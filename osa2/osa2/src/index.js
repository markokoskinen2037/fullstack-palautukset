import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
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
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }


const Kurssi = ({kurssi}) => {
    console.log(kurssi)
    return (
        <div>
            <h1>{kurssi.nimi}</h1>
            {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
            <p>yhteensä {tehtavienSumma(kurssi)} tehtävää</p>
        </div>
    )
}


function tehtavienSumma(kurssi) {
    let sum = 0;
    kurssi.osat.map(osa => sum = sum+osa.tehtavia)
    return (sum)
}









ReactDOM.render(<App />, document.getElementById('root'));
