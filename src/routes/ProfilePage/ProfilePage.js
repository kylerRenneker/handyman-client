import React, { useContext, useEffect, useState } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import TokenService from '../../services/token-service';

export default function ProfilePage(props) {
    const [error, setError] = useState(null)
    const context = useContext(HandymanContext)
    const { handyman, user } = context
    console.log(user)


    useEffect(() => {
        if (!TokenService.hasAuthToken()) {
            setError('You must be logged in to view profile info')
        }
        else {
            HandymanApiService.getUser()
                .then(context.setUser)
                .catch(context.setError)
            HandymanApiService.getHandymanByUserId(user.id)
                .then(context.setHandyman)
                .catch(context.setError)
            // console.log(handyman)
        }
        return () => {
            context.clearUser()
        }
    }, [])


    console.log('rendering...')

    return (
        <section className='profile__page'>
            <h2>My Profile</h2>
            <form className='profile__form'>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
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
                <button type='submit'>Update Info</button>
            </form>
        </section>
    )
}