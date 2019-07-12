import React, { useContext, useEffect, useState } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import TokenService from '../../services/token-service'
import './ProfilePage.css'

export default function ProfilePage(props) {
    const [error, setError] = useState(null)
    const [hasUser, setHasUser] = useState(false)
    const context = useContext(HandymanContext)
    const { handyman, user, quotes } = context
    console.log(user)
    console.log(handyman)
    console.log(quotes)
    console.log(context.error)


    useEffect(() => {
        if (!TokenService.hasAuthToken()) {
            setError('You must be logged in to view profile info')
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
                    return handyman
                })
                .then(handyman => HandymanApiService.getQuoteRequests(handyman.id))
                .then(context.setQuotes)
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
            <ul className='quote__list'>
                <h3 className='requests__title'>Quote Requests</h3>
                {content}
            </ul>
        )
    }

    // const renderHandymanInfo = () => {

    // }

    const updateUserInfo = ev => {
        ev.preventDefault()

        const { full_name, user_name, password, email } = ev.target

    }

    const renderProfileForm = () => {
        return (
            <>
                <form
                    onSubmit={updateUserInfo}
                    className='profile__form'>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
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
                    {/* {handyman ? renderHandymanInfo() : null} */}
                    <button type='submit'>Update Info</button>
                </form>
            </>
        )
    }

    return (
        <section className='profile__page'>
            <h2>My Profile</h2>
            {quotes ? renderQuoteRequests(quotes) : null}
            {user ? renderProfileForm() : null}
        </section>
    )
}