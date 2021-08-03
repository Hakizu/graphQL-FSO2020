import { useQuery } from '@apollo/client';
import { ALL_PERSONS } from './queries';
import PersonForm from './components/PersonForm';
import React, { useState } from 'react'
import Persons from './components/Persons'
import PhoneForm from './components/PhoneForm';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>loading...</div>
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(undefined)
    }, 10000)
  }

  return (
    <>
      <Notify errorMessage={errorMessage}/>
      <Persons persons = {result.data.allPersons}/>
      <PersonForm setError={notify}/>
      <PhoneForm setError={notify}/>
    </>
  )
}

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null
  }

  return (
    <div style={{color: 'red'}}>
      {errorMessage}
    </div>
  )
}

export default App;
