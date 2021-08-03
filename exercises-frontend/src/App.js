
import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'

const Notify = ({error}) => {
  if (!error) {
    return null
  }
  return (
    <div style={{color: 'red'}}>
      {error}
    </div>
  )
}

const App = () => {
  const [page, setPage] = useState('authors')
  const [error, setError] = useState(undefined)

  const notify = (message) => {
    setError(message)
    setTimeout(() => {
      setError(undefined)
    }, 10000)
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>
      <Notify error={error}/>
      <Authors
        show={page === 'authors'}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
        notify={notify}
      />

    </div>
  )
}

export default App