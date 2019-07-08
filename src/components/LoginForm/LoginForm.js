import React, { useState } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export default function LoginForm(props) {
    const [error, setError] = useState(null)

    const handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        setError(null)
        const { user_name, password } = ev.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                props.onLoginSuccess()
            })
            .catch(res => {
                setError(res.error)
            })
    }

    return (
        <form
            className='login__form'
            onSubmit={handleSubmitJwtAuth}
        >
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    User name
          </label>
                <input
                    className='login__inputText'
                    required
                    name='user_name'
                    id='LoginForm__user_name'>
                </input>
            </div>
            <div className='password'>
                <label htmlFor='LoginForm__password'>
                    Password
          </label>
                <input
                    className='login__inputText'
                    required
                    name='password'
                    type='password'
                    id='LoginForm__password'>
                </input>
            </div>
            <button className='login__button' type='submit'>
                Login
        </button>
        </form>
    )
}