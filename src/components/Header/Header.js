import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import mySVG from './312334.svg'
import './Header.css'
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';


export default function Header() {
    const context = useContext(UserContext)

    const handleLogoutClick = () => {
        context.setLoggedIn(false)
        TokenService.clearAuthToken()
    }

    const renderLogoutLink = () => {
        return (
            <Link onClick={handleLogoutClick} to='/'>Logout</Link>
        )
    }

    const renderLoginLink = () => {

        return (
            <div className='nav__not-loggin-in'>
                <Link to='/handymanSignup' className='header__links'>
                    Join as a HandyMan
                </Link>
                <Link to='/signup' className='header__links'>
                    Sign Up
                </Link>
                <Link to='/login' className='header__links'>
                    Login
                </Link>
            </div>
        )
    }



    return (
        <>
            <nav className='header__nav'>
                <Link to='/'>
                    <img className="header__icon" src={mySVG} alt={'Handyman Icon'} />
                </Link>
                {TokenService.hasAuthToken()
                    ? renderLogoutLink()
                    : renderLoginLink()}

            </nav>
        </>
    )
}