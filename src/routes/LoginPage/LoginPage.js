import React, { useContext } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import UserContext from '../../contexts/UserContext';

export default function LoginPage(props) {
    const context = useContext(UserContext)
    console.log(props)

    const handleLoginSuccess = () => {
        const { location = {}, history = { push: () => { } } } = props
        const destination = (location.state || {}).from || '/'
        context.setLoggedIn(true)
        history.push(destination)
    }

    return (
        <section className='login__page'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </section>
    )
}