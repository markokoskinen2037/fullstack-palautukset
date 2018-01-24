import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={osat} />
      <Yhteensa osat={osat}/>
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.osat[0].nimi} tehtavamaara={props.osat[0].tehtavia}/>
      <Osa nimi={props.osat[1].nimi} tehtavamaara={props.osat[1].tehtavia}/>
      <Osa nimi={props.osat[2].nimi} tehtavamaara={props.osat[2].tehtavia}/>
    </div>
  )
}

const Yhteensa = (props) => {
  let sum = 0;
  props.osat.forEach(element => {
     sum = sum + element.tehtavia;
  });
  return (
    <div>
      <p>yhteensä {sum} tehtävää</p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.nimi} {props.tehtavamaara}</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)