import {  useQuery } from '@apollo/client';
import { ALL_PERSONS } from './queries';
import PersonForm from './PersonForm';
import Persons from './Persons'
import React from 'react'


const App = () => {
  const result = useQuery(ALL_PERSONS)
  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <Persons persons = {result.data.allPersons}/>
      <PersonForm />
    </>
  )
}

export default App;
