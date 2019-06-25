import React, { useState } from 'react'

export default function HandymanSignUpForm(props) {

    const [error, setError] = useState({ error: null })

    const handleSubmit = ev => {
        ev.preventDefault()
    }

    return (
        <form
            className='Handyman__signUpForm'
            onSubmit={handleSubmit}
        >

        </form>
    )
}