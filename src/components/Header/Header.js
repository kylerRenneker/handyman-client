import React from 'react'
import { Link } from 'react-router-dom'
import mySVG from './312334.svg'
import './Header.css'


export default function Header() {



    return (
        <>
            <Link to='/'>
                <img className="header__icon" src={mySVG} alt={'Handyman Icon'} />
            </Link>
            <nav className="header__nav">
                <Link to='/handymanSignup' className="header__links">
                    Join as a HandyMan
                </Link>
                <Link className="header__links">
                    Sign Up
                </Link>
                <Link to='/login' className="header__links">
                    Login
                </Link>
            </nav>
        </>
    )
}