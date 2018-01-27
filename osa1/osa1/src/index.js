import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      hyva : 0,
      neutraali : 0,
      huono : 0,
      keskiarvo : 0
    }
  }


  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva+1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali+1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono+1
    })
  }

  laskeKeskiarvo = () => {
  
    let painotettusumma = 1 * this.state.hyva +  0 * this.state.neutraali + this.state.huono * -1;

    return painotettusumma / (this.state.hyva+this.state.neutraali+this.state.huono);
  }

  laskePositiivisuusProsentti = () => {
    let positiiviset = this.state.hyva;
    let negatiiviset = this.state.huono;

    return positiiviset/ (positiiviset+negatiiviset);
  }


  render (){
    
    return (
    <div>
      <h1>anna palautetta</h1>
      <button onClick={this.klikHyva}>hyva</button>
      <button onClick={this.klikNeutraali}>neutraali</button>
      <button onClick={this.klikHuono}>huono</button>
      <h1>statistiikka</h1>
      <div>hyvä {this.state.hyva}</div>
      <div>neutraali {this.state.neutraali}</div>
      <div>huono {this.state.huono}</div>
      <div>keskiarvo {this.laskeKeskiarvo()}</div>
      <div>positiivisia {this.laskePositiivisuusProsentti()} %</div>
    </div>
    )
  }
}






ReactDOM.render(
  <App />,
  document.getElementById('root')
)