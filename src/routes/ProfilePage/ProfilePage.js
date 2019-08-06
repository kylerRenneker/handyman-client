import React, { useContext, useEffect, useState, Fragment } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import TokenService from '../../services/token-service'
import Modal from '../../components/Modal/Modal'
import './ProfilePage.css'
import ServiceListContext from '../../contexts/ServiceListContext';

export default function ProfilePage(props) {
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [introduction, setIntroduction] = useState(null)
    const context = useContext(HandymanContext)
    const servicesContext = useContext(ServiceListContext)
    const { handyman, user, quotes } = context
    // console.log(user)
    console.log(handyman)
    // console.log(quotes)
    // console.log(context.error)
    console.log(updateSuccess)


    useEffect(() => {
        context.clearError()
        setUpdateSuccess(false)
        if (!TokenService.hasAuthToken()) {
            context.setError({ error: 'You must be logged in to view profile info' })
        }
        else {
            HandymanApiService.getUser()
                .then(user => {
                    context.setUser(user)
                    return user
                })
                .then(user => HandymanApiService.getHandymanByUserId(user.id))
                .then(handyman => {
                    context.setHandyman(handyman)
                    setIntroduction(handyman.introduction)
                    return handyman
                })
                .then(handyman => HandymanApiService.getQuoteRequests(handyman.id))
                .then(context.setQuotes)
                .then(res => HandymanApiService.getAllServices())
                .then(res => servicesContext.setServices(res))
                .catch(context.setError)
        }

        return () => {
            context.clearUser()
            context.clearHandyman()
        }
    }, [])

    const renderQuoteRequests = (quotes) => {
        const content = quotes.map(quote => {
            const date = new Date(quote.date_created)
            const formattedDate = date.toDateString()
            return <li key={quote.id} className='quote__item'>
                <h3>{quote.user.full_name}</h3>
                <p>Email: {quote.user.email}</p>
                <p>Sent: {formattedDate}</p>
                <p>Description: {quote.description}</p>
            </li>
        })
        return (
            <section>
                <h3 className='requests__title'>Quote Requests</h3>
                <ul className='quote__list'>
                    {content}
                </ul>
            </section>
        )
    }
    const servicesSelected = []
    const onServiceChange = (ev) => {
        if (ev.target.checked) {
            servicesSelected.push(Number(ev.target.value))
        }
        else {
            let index = servicesSelected.indexOf(ev.target.value)
            servicesSelected.splice(index, 1)
        }
    }

    const servicesOptions = servicesContext.services.map(service => {
        return <Fragment key={service.id}>
            <label htmlFor={service.id}>
                <input onChange={onServiceChange} id={service.id} type='checkbox' name='services[]' value={service.id} />{service.name}</label>
        </Fragment>
    })

    const renderHandymanInfo = () => {
        const updateTextArea = (event) => {
            setIntroduction(event.target.value)
        }
        return (
            <>
                <div className='display_name'>
                    <label htmlFor='HandymanSignUpForm__display_name'>Display name</label>
                    <input defaultValue={handyman.provider_name} className='form__textInput' required id='HandymanSignUpForm__display_name' type='text' name='display_name'></input>
                </div>
                <div className='location'>
                    <label htmlFor='signup-zipcode'>Your location</label>
                    <input defaultValue={handyman.location} className='form__textInput' required type='text' pattern='\d*' inputMode='numeric' maxLength='5' autoComplete='postal-code' id='signup__zipcode' placeholder='Zip code' name='location'></input>
                </div>
                <div className='handyman__introduction'>
                    <label htmlFor='introduction'>Introduce your business</label>
                    <textarea value={introduction} onChange={updateTextArea} className='form__textInput' id='introduction' name='introduction' rows='5' cols='33'></textarea>
                </div>
                <div className='handyman__services'>
                    <h3>Please re-select the services you can provide</h3>
                    {servicesOptions}
                </div>
            </>
        )
    }

    const successfulUpdate = () => {
        return (
            <Modal reason="Your profile has been updated." closeModal={setUpdateSuccess} />
        )
    }

    const updateUserInfo = ev => {
        ev.preventDefault()

        const { full_name, user_name, password, email } = ev.target
        const updatedUser = {
            full_name: full_name.value,
            user_name: user_name.value,
            password: password.value,
            email: email.value
        }
        HandymanApiService.updateUser(user.id, updatedUser)
            .then(res => {
                console.log(res)
                setUpdateSuccess(true)
            })
            .catch(context.setError)
    }

    const renderProfileForm = () => {
        const { error } = context
        return (
            <>
                <form
                    onSubmit={updateUserInfo}
                    className='profile__form'>
                    <div role='alert'>
                        {error && <p className='red'>{error.error}</p>}
                    </div>
                    <h3>Your Info</h3>
                    <div className='full_name'>
                        <label htmlFor='form__full_name'>
                            Full name
                        </label>
                        <input
                            className='form__textInput'
                            name='full_name'
                            type='text'
                            defaultValue={user.full_name}
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
                            defaultValue={user.user_name}
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
                            placeholder='Enter current or new password'
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
                            defaultValue={user.email}
                            required
                            id='form__email'>
                        </input>
                    </div>
                    {handyman ? renderHandymanInfo() : null}
                    <button className='profile__button' type='submit'>Update Info</button>
                </form>
            </>
        )
    }

    return (
        <section className='profile__page'>
            <h2>My Profile</h2>
            {quotes ? renderQuoteRequests(quotes) : null}
            {updateSuccess ? successfulUpdate() : null}
            {user ? renderProfileForm() : null}
        </section>
    )
}