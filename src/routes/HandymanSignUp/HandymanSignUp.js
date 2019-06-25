import React from 'react'
import HandymanSignUpForm from '../../components/HandymanSignUpForm/HandymanSignUpForm'

export default function HandymanSignUp() {

    const handleSignUpSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }

    return (
        <>
            <h2>Register as a Hanyman</h2>
            <HandymanSignUpForm onSignUpSuccess={handleSignUpSuccess} />
        </>
    )
}