import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', id: 'Arto Hellas'}
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log("click")

    const personObject = {
      name: this.state.newName,
      id: this.state.newName
    }

    const persons = this.state.persons.concat(personObject)

    this.setState({
      persons,
      newName: ""
    })

  }

  handleNameChange = (event) => {
    this.setState({newName: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson} onChange={this.handleNameChange}>
          <div>
            nimi: <input value={this.state.newName} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App