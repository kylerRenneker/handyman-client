import React, { useContext, useState, useEffect } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import UserContext from '../../contexts/UserContext'

export default function LoginPage(props) {
    const [fromSignup, setFromSignup] = useState(false)
    const context = useContext(UserContext)
    const { history = {} } = props
    let previousLocation = ''

    if (history.location.state) {
        previousLocation = history.location.state.prevPath
    }

    useEffect(() => {
        setFromSignup(false)
        if (previousLocation === '/handymanSignup') {
            setFromSignup(true)
        }
        else if (previousLocation === '/signup') {
            setFromSignup(true)
        }
    }, [])


    const handleLoginSuccess = () => {
        context.setLoggedIn(true)
        if (fromSignup) { //checkeing to see if the location state has been set on signup
            history.push('/')
            setFromSignup(false)
        }
        else {
            history.push(history.location.state.prevPath)
        }
    }

    return (
        <section className='login__page'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </section>
    )
}