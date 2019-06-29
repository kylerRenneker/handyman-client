import React, { useEffect, useContext } from 'react'
import HandymanSignUpForm from '../../components/HandymanSignUpForm/HandymanSignUpForm'
import HandymanApiService from '../../services/handyman-api-service'
import ServicesListContext from '../../contexts/ServiceListContext'

export default function HandymanSignUp() {
    const context = useContext(ServicesListContext)

    const handleSignUpSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    return (
        <>
            <h2>Register as a Hanyman</h2>
            <HandymanSignUpForm onSignUpSuccess={handleSignUpSuccess} />
        </>
    )
}