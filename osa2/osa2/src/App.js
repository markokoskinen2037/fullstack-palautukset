import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount() {
    console.log("will mount...")

    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log("promise fulfilled")
        this.setState({ countries: response.data })
      })
  }





  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }


  render() {

    let countriesToShow = [];

    countriesToShow = this.state.countries.filter(country => country.name.includes(this.state.filter))
    console.log(countriesToShow)
    console.log(this.state.filter)

    if (countriesToShow.length > 10) {
      return (
        <div>
          <div onChange={this.handleFilterChange}>
            find countries: <input />
          </div>

          <div>
            <p>too many countries found, please be more specific</p>
          </div>
        </div>
      )
    }

    if (countriesToShow.length === 1) {
      return (
        <div>

          <div onChange={this.handleFilterChange}>
            find countries: <input />
          </div>

          <h2>{countriesToShow[0].name}</h2>

          <p>capital: {countriesToShow[0].capital}</p>

          <p>pop: {countriesToShow[0].population}</p>

          <img width="200px" src={countriesToShow[0].flag}/>


        </div>
      )
    }





    return (
      <div>
        <div onChange={this.handleFilterChange}>
          find countries: <input />
        </div>

        <div>
          {countriesToShow.map(country => <p key={country.name}>{country.name}</p>)}
        </div>
      </div>
    )
  }
}

export default App