import React from 'react';

const PhoneBookEntry = ({person}) => {
    return (
      <li key={person.name}>{person.name} {person.number}</li>
    )
  }

export default PhoneBookEntry