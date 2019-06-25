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
            <div className='display_name'>
                <label htmlFor='HandymanSignUpForm__display_name'>
                    Your Handyman display name
                </label>
                <input
                    name='user_name'
                    type='text'
                    required
                    id='HandymanSignUpForm__display_name'>
                </input>
            </div>
            <div className='location'>
                <label></label>
                <input></input>
            </div>
            <div className='handyman__services'>
                <label></label>
                <input></input>
            </div>
            <div className='password'>
                <label></label>
                <input></input>
            </div>


        </form>
    )
}