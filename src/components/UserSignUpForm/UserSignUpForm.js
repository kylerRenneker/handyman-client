import React, { useState } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default function UserSignUpForm(props) {
    const [error, setError] = useState(null)

    console.log(error)

    const handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, email, user_name, password } = ev.target

        setError(null)
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
            email: email.value,
        })
            .then(user => {
                full_name.value = ''
                email.value = ''
                user_name.value = ''
                password.value = ''
                props.onSignUpSuccess()
            })
            .catch(res => {
                console.log(res.error)
                setError(res.error)
            })
    }

    return (
        <form
            className='signup'
            onSubmit={handleSubmit}
        >
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <div className='full_name'>
                <label htmlFor='signup__full_name'>
                    Full name
                </label>
                <input
                    name='full_name'
                    type='text'
                    required
                    id='signup__full_name'>
                </input>
            </div>
            <div className='user_name'>
                <label htmlFor='signup__user_name'>
                    User name
                </label>
                <input
                    name='user_name'
                    type='text'
                    required
                    id='signup__user_name'>
                </input>
            </div>
            <div className='password'>
                <label htmlFor='signup__password'>
                    Password
                </label>
                <input
                    name='password'
                    type='password'
                    required
                    id='signup__password'>
                </input>
            </div>
            <div className='nick_name'>
                <label htmlFor='signup__nick_name'>
                    Email
          </label>
                <input
                    name='email'
                    type='email'
                    required
                    id='signup__email'>
                </input>
            </div>
            <button type='submit'>
                Register
        </button>
        </form>
    )
}