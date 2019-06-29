import React, { useState, useContext } from 'react'
import './HandymanSignUpForm.css'
import ServiceListContext from '../../contexts/ServiceListContext'

export default function HandymanSignUpForm(props) {
    const context = useContext(ServiceListContext)
    const [error, setError] = useState({ error: null })

    const handleSubmit = ev => {
        ev.preventDefault()
    }

    const servicesOptions = context.services.map(service => {
        return <>
            <label for={service.id}>
                <input id={service.id} type='checkbox' name='services[]' value={service.id} />{service.name}</label>

        </>
    })

    return (
        <form
            className='Handyman__signUpForm'
            onSubmit={handleSubmit}
        >
            <div className='full_name'>
                <label htmlFor='HandymanSignUp__full_name'>
                    Full name
                </label>
                <input
                    name='full_name'
                    type='text'
                    required
                    id='HandymanSignUp__full_name'>
                </input>
            </div>
            <div className='user_name'>
                <label htmlFor='HandymanSignUpForm__user_name'>
                    User name
                </label>
                <input
                    name='user_name'
                    type='text'
                    required
                    id='HandymanSignUpForm__user_name'>
                </input>
            </div>
            <div className='email'>
                <label htmlFor='HandymanSignUpForm__email'>
                    Email
                </label>
                <input
                    name='email'
                    type='email'
                    required
                    id='HandymanSignUpForm__email'>
                </input>
            </div>
            <div className='display_name'>
                <label htmlFor='HandymanSignUpForm__display_name'>
                    Display name
                </label>
                <input
                    name='user_name'
                    type='text'
                    required
                    id='HandymanSignUpForm__display_name'>
                </input>
            </div>
            <div className='location'>
                <label htmlFor="zipcode">Your location</label>
                <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            </div>
            <div className='handyman__services'>
                <p>Choose the services you can provide:</p>
                {servicesOptions}

            </div>
            {/* <div className='password'>
                <label></label>
                <input></input>
            </div> */}


        </form>
    )
}