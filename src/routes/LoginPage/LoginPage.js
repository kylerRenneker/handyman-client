import React, { useContext } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import UserContext from '../../contexts/UserContext'

export default function LoginPage(props) {
    const context = useContext(UserContext)

    console.log(props)


    const handleLoginSuccess = () => {
        const { location = {}, history = { push: () => { } } } = props
        context.setLoggedIn(true)
        if (history.location.state) { //checkeing to see if the location state has been set on signup
            history.push('/')
        }
        else {
            history.goBack()
        }
    }

    return (
        <section className='login__page'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </section>
    )
}