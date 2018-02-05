import React from 'react';
import axios from 'axios';

function deleteTest (id){
  axios({
    method: 'DELETE',
    url: 'http://localhost:3001/persons/' + {id},
    headers: { 'Content-Type': 'application/json' },
  });
  console.log("deleted 1.person")
}


const PhoneBookEntry = ({person}) => {
    return (
      <li key={person.name}>{person.name} {person.number} <button>poista</button></li>
    )
  }

export default PhoneBookEntry