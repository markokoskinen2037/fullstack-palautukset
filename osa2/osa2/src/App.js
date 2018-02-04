import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log("click")

    const personObject = {
      name: this.state.newName,
      id: this.state.newName,
      number: this.state.newNumber
    }

    let dublicate = false
    this.state.persons.forEach(person => {
      if (person.name === personObject.name) {
        dublicate = true;
      }
    });

    if (!dublicate) {
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons,
        newName: ""
      })
    } else {
      this.setState({
        newName: ""
      })
    }



  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {

    let personsToShow = [];

    if(this.state.filter !== ''){
      personsToShow = this.state.persons.filter(person => person.name.indexOf(this.state.filter) > -1)
      console.log(personsToShow)
    } else {
      personsToShow = this.state.persons
      console.log(personsToShow)
    }
    
   

    return (
      <div>
        <h2>Puhelinluettelo</h2>


        <div onChange={this.handleFilterChange}>rajaa näytettäviä: <input /></div>


        <h2>Lisää uusi:</h2>
        <form onSubmit={this.addPerson} >
          <div onChange={this.handleNameChange}>
            nimi: <input value={this.state.newName} />
          </div>
          <div onChange={this.handleNumberChange}>
            numero: <input />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>


        <h2>Numerot</h2>
        <ul>
          {personsToShow.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
      </div>
    )
  }
}

export default App