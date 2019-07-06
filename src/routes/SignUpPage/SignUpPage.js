import React from 'react'
import UserSignUpForm from '../../components/UserSignUpForm/UserSignUpForm'
import './SignUpPage.css'

export default function SignUpPage(props) {

    const handleSignUpSuccess = () => {
        const { history = { push: () => { } } } = props
        history.push({
            pathname: 'login',
            state: {
                from: '/signup'
            }
        })
    }

    return (
        <section className='signup__page'>
            <h2>Sign Up</h2>
            <UserSignUpForm onSignUpSuccess={handleSignUpSuccess} {...props} />
        </section>
    )
}