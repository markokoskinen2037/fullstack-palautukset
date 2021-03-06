import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      best: 0,
      pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  randomAnectode = () => {
    let random = Math.floor(Math.random() * 5) + 1;
    this.setState({ selected: random })
  }

  giveVoteToCurrent = () => {
    const kopio = [...this.state.pisteet]
    kopio[this.state.selected] = kopio[this.state.selected] + 1;
    this.setState({ pisteet: kopio })
    this.updateBest()
  }

  updateBest = () => {

    let i = 0;
    let largest = 0;
    while (i < this.state.pisteet.length) {
      if (this.state.pisteet[i] >= largest) {
        largest = this.state.pisteet[i];
        this.setState({ best: i })
      }
      i++;
    }


  }


  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        <button onClick={this.randomAnectode}>next anecdote</button>
        <button onClick={this.giveVoteToCurrent}>give +1</button>
        <h1>anecdoote with most votes:</h1>
        {anecdotes[this.state.best]}
        <br></br>
        <p>has {this.state.pisteet[this.state.best]} votes</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)