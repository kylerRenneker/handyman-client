import React, { useState, useContext, useEffect, Fragment } from 'react'
import AuthApiService from '../../services/auth-api-service'
import ServiceListContext from '../../contexts/ServiceListContext'
import HandymanApiService from '../../services/handyman-api-service'
import './UserSignUpForm.css'

export default function UserSignUpForm(props) {
    const context = useContext(ServiceListContext)
    const { error } = context

    const servicesSelected = []

    useEffect(() => {
        console.log(error)
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    const onServiceChange = (ev) => {
        if (ev.target.checked) {
            servicesSelected.push(Number(ev.target.value))
        }
        else {
            let index = servicesSelected.indexOf(ev.target.value)
            servicesSelected.splice(index, 1)
        }
    }

    const servicesOptions = context.services.map(service => {
        return <Fragment key={service.id}>
            <label htmlFor={service.id}>
                <input onChange={onServiceChange} id={service.id} type='checkbox' name='services[]' value={service.id} />{service.name}</label>
        </Fragment>
    })

    const handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, email, user_name, password } = ev.target
        const { display_name, location, introduction } = ev.target

        context.clearError()
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
            email: email.value,
        })
            .then(user =>
                (props.location.pathname === '/handymanSignup') ? AuthApiService.postHandyMan({
                    user_id: user.id,
                    provider_name: display_name.value,
                    introduction: introduction.value,
                    services: servicesSelected,
                    location: location.value
                }) : user
            )
            .then(user => {
                full_name.value = ''
                email.value = ''
                user_name.value = ''
                password.value = ''
                props.onSignUpSuccess()
            })
            .catch(context.setError)
    }

    const renderHandymanSignUp = () => {
        return (
            <>
                <div className='display_name'>
                    <label htmlFor='HandymanSignUpForm__display_name'>Display name</label>
                    <input className='form__textInput' required id='HandymanSignUpForm__display_name' type='text' name='display_name'></input>
                </div>
                <div className='location'>
                    <label htmlFor='signup-zipcode'>Your location</label>
                    <input className='form__textInput' required type='text' pattern='\d*' inputMode='numeric' maxLength='5' autoComplete='postal-code' id='signup__zipcode' placeholder='Zip code' name='location'></input>
                </div>
                <div className='handyman__introduction'>
                    <label htmlFor='introduction'>Introduce your business</label>
                    <textarea className='form__textInput' id='introduction' name='introduction' rows='5' cols='33'></textarea>
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
            className='signup__form'
            onSubmit={handleSubmit}
        >
            <div role='alert'>
                {error && <p className='red'>{error.error}</p>}
            </div>
            <div className='full_name'>
                <label htmlFor='form__full_name'>
                    Full name
                </label>
                <input
                    className='form__textInput'
                    name='full_name'
                    type='text'
                    required
                    id='form__full_name'>
                </input>
            </div>
            <div className='user_name'>
                <label htmlFor='form__user_name'>
                    User name
                </label>
                <input
                    className='form__textInput'
                    name='user_name'
                    type='text'
                    required
                    id='form__user_name'>
                </input>
            </div>
            <div className='password'>
                <label htmlFor='form__password'>
                    Password
                </label>
                <input
                    className='form__textInput'
                    name='password'
                    type='password'
                    required
                    id='form__password'>
                </input>
            </div>
            <div className='email'>
                <label htmlFor='form__email'>
                    Email
          </label>
                <input
                    className='form__textInput'
                    name='email'
                    type='email'
                    required
                    id='form__email'>
                </input>
            </div>
            {
                (props.location.pathname === '/handymanSignup') ? renderHandymanSignUp() : ''
            }
            <button className='signup__button' type='submit'>
                Register
        </button>
        </form>
    )
}