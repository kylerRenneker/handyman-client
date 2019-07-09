import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import headerIcon from './104106.jpg'
import downArrow from './down-arrow.svg'
import './Header.css'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'


export default function Header(props) {
    const [active, setActive] = useState(false)
    const context = useContext(UserContext)

    console.log('header props: ', props)

    useEffect(() => {
        if (TokenService.hasAuthToken()) {
            context.setLoggedIn(true)
        }
    }, [])

    const toggleClass = () => {
        setActive(!active)
    }

    const closeMenu = () => {
        if (active) {
            setActive(false)
        }
    }

    const handleLogoutClick = () => {
        context.setLoggedIn(false)
        TokenService.clearAuthToken()
    }

    const renderLogoutLink = () => {
        return (
            <Link className='header__links signout' onClick={handleLogoutClick} to='/'>Logout</Link>
        )
    }

    const renderLoginLink = () => {

        const { location } = props

        return (
            <div className={'nav__not-loggin-in ' + (active ? 'nav-show' : null)}>
                <Link onClick={toggleClass} to={{ pathname: '/handymanSignup', state: { from: location.pathname } }} className='header__links'>
                    Join as a handyman
                </Link>
                <Link onClick={toggleClass} to='/signup' className='header__links'>
                    Sign up
                </Link>
                <Link onClick={toggleClass} to='/login' className='header__links'>
                    Login
                </Link>
            </div >
        )
    }

    return (
        <>
            <nav className={'header__nav ' + (context.loggedIn ? 'nav__logged-in' : null)}>
                <div className='headerIcon__mobile'>
                    <Link to='/'>
                        <img onClick={closeMenu} className='header__icon' src={headerIcon} alt={'Handyman Icon'} />
                    </Link>
                    <img onClick={toggleClass} alt='menu dropdown arrow' className={'menu__toggle ' + (TokenService.hasAuthToken() ? 'arrow-hide' : null)} src={downArrow} />
                </div>
                {TokenService.hasAuthToken()
                    ? renderLogoutLink()
                    : renderLoginLink()}

            </nav>
        </>
    )
}