import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { FIND_PERSON } from '../queries';

const Persons = ({ persons }) => {
  const [ getPerson, result ] = useLazyQuery(FIND_PERSON)
  const [ person, setPerson ] = useState(undefined)

  const showPerson = (name) => {
    getPerson({ variables: { nameToSearch: name } })
  }

    useEffect(() => {
      if (result.data) {
        setPerson(result.data.findPerson)
      }
    }, [result])

    if (person) {
      return (
        <div>
          <h2>{person.name}</h2>
          <div>{person.address.street} {person.address.city}</div>
          <div>{person.phone}</div>
          <button onClick={() => setPerson(undefined)}>close</button>
        </div>
      )
    }

  return (
    <div>
      <h2>Persons</h2>
        {persons.map(it => 
          <div key={it.name}>
            {it.name} {it.phone}
            <button onClick={() => showPerson(it.name)}>
              show address
            </button>
          </div>
        )} 
    </div>
  )
}

export default Persons