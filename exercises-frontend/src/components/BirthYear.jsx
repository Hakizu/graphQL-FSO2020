import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ALL_AUTHORS, EDIT_BORN } from '../queries'

const BirthYear = ({ authors }) => {
    const [name, setName] = useState('')
    const [born, setBorn] = useState('')

    const [updateAuthor] = useMutation(EDIT_BORN, {
        refetchQueries: [ {query: ALL_AUTHORS} ]
    })

    const submit = (event) => {
        event.preventDefault()

        updateAuthor({ variables: { name, born } })

        setName('')
        setBorn('')
    }

    return (
        <>
            <h2>Set BirthYear</h2>
            <form onSubmit={submit}>
                <div>
                    Name <select
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    >
                        {authors?.map(it =>
                            <option>{it.name}</option>
                        )}
                    </select>
                    born <input
                        value={born}
                        type='number'
                        onChange={({ target }) => setBorn(target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default BirthYear