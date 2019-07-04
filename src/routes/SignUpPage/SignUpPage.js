import React from 'react'
import UserSignUpForm from '../../components/UserSignUpForm/UserSignUpForm'

export default function SignUpPage(props) {

    const handleSignUpSuccess = () => {
        const { history = { push: () => { } } } = props
        console.log(props)
        history.push('/login')
    }

    return (
        <section className='signup__page'>
            <h2>Sign Up</h2>
            <UserSignUpForm onSignUpSuccess={handleSignUpSuccess} {...props} />
        </section>
    )
}