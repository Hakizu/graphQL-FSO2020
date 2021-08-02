import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PERSON, ALL_PERSONS } from './queries'

const PersonForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')

    const [ createdPerson ] = useMutation(CREATE_PERSON, {
        refetchQueries: [{ query: ALL_PERSONS }]
    })

    const submit = (event) => {
        event.preventDefault()

        createdPerson({ variables: { name, phone, street, city } })

        setName('')
        setPhone('')
        setStreet('')
        setCity('')
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={submit}>
                <div>
                    name <input value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div>
                    phone <input value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                    street <input value={street}
                        onChange={({ target }) => setStreet(target.value)}
                    />
                    city <input value={city} 
                        onChange={({ target }) => setCity(target.value)}
                    />
                </div>
                <button type='submit'>add!</button>
            </form>
        </div>
    )
}

export default PersonForm