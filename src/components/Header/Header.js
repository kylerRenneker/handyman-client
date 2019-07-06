import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import headerIcon from './312334.svg'
import downArrow from './down-arrow.svg'
import './Header.css'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'


export default function Header() {
    const [active, setActive] = useState(false)
    const context = useContext(UserContext)

    useEffect(() => {
        console.log('useEffect ran in header')
        if (TokenService.hasAuthToken()) {
            context.setLoggedIn(true)
        }
    }, [])

    const toggleClass = () => {
        console.log('toggle class ran')
        setActive(!active)
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

        return (
            <div className={'nav__not-loggin-in ' + (active ? 'nav-show' : null)}>
                <Link onClick={toggleClass} to='/handymanSignup' className='header__links'>
                    Join as a HandyMan
                </Link>
                <Link onClick={toggleClass} to='/signup' className='header__links'>
                    Sign Up
                </Link>
                <Link onClick={toggleClass} to='/login' className='header__links'>
                    Login
                </Link>
            </div>
        )
    }

    return (
        <>
            <nav className={'header__nav ' + (context.loggedIn ? 'nav__logged-in' : null)}>
                <div className='headerIcon__mobile'>
                    <Link to='/'>
                        <img className='header__icon' src={headerIcon} alt={'Handyman Icon'} />
                    </Link>
                    <img onClick={toggleClass} className={'menu__toggle ' + (TokenService.hasAuthToken() ? 'arrow-hide' : null)} src={downArrow} />
                </div>
                {TokenService.hasAuthToken()
                    ? renderLogoutLink()
                    : renderLoginLink()}

            </nav>
        </>
    )
}