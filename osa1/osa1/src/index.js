import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0
    }
  }


  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  laskeKeskiarvo = () => {

    let painotettusumma = 1 * this.state.hyva + 0 * this.state.neutraali + this.state.huono * -1;

    return painotettusumma / (this.state.hyva + this.state.neutraali + this.state.huono);
  }


  laskePositiivisuusProsentti = () => {
    let positiiviset = this.state.hyva;
    let negatiiviset = this.state.huono;

    return positiiviset / (positiiviset + negatiiviset);
  }


  render() {

    return (
      <div>
        <h1>anna palautetta</h1>
        <Button handleClick={this.klikHyva} text="hyva" />
        <Button handleClick={this.klikNeutraali} text="neutraali" />
        <Button handleClick={this.klikHuono} text="huono" />

        <h1>statistiikka</h1>
        <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />



      </div>
    )
  }
}





const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({name, value}) => {
  return (
    <div>{name} {value}</div>
  )
}

const Statistics = ({ hyva, neutraali, huono }) => {

  let total = hyva + neutraali + huono
  if (total == 0) {
    return (
      <div>ei yhtään palautetta annettu</div>
    )
  } else {
    let keskiarvo = 1*hyva + 0*neutraali -1 * huono;
    return (
      <div>
        <Statistic name="hyva" value={hyva}/>
        <Statistic name="neutraali" value={neutraali}/>
        <Statistic name="huono" value={huono}/>

        <Statistic name="keskiarvo" value={keskiarvo/total}/>
        <Statistic name="positiivisia" value={hyva/(hyva+huono)}/>
      </div>
    )
  }


}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)