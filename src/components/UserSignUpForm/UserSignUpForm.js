import React, { useState, useContext, useEffect } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ServiceListContext from '../../contexts/ServiceListContext'
import HandymanApiService from '../../services/handyman-api-service'
import './UserSignUpForm.css'

export default function UserSignUpForm(props) {
    const [error, setError] = useState(null)
    const context = useContext(ServiceListContext)

    console.log(props)

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    const servicesOptions = context.services.map(service => {
        return <>
            <label for={service.id}>
                <input id={service.id} type='checkbox' name='services[]' value={service.id} />{service.name}</label>

        </>
    })

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

    const renderHandymanSignUp = () => {
        return (
            <>
                <div className='display_name'>
                    <label htmlFor='HandymanSignUpForm__display_name'>Display name</label>
                    <input id='HandymanSignUpForm__display_name' type='text'></input>
                </div>
                <div className='location'>
                    <label htmlFor="zipcode">Your location</label>
                    <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
                </div>
                <div className='handyman__services'>
                    <p>Choose the services you can provide:</p>
                    {servicesOptions}

                </div>
            </>
        )
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
            {
                (props.location.pathname === '/handymanSignup') ? renderHandymanSignUp() : ''
            }
            <button type='submit'>
                Register
        </button>
        </form>
    )
}