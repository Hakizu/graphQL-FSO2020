  
import React, { useEffect, useState } from 'react'
import { ALL_AUTHORS } from '../queries'
import { useQuery } from '@apollo/client'
import BirthYear from './BirthYear'

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    if (result?.data?.allAuthors) {
      setAuthors(result.data.allAuthors)
    }
  }, [result])

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <BirthYear authors={authors}/>
    </div>
  )
}

export default Authors
