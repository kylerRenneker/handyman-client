import React from 'react'
import { Link } from 'react-router-dom'
import mySVG from './312334.svg'
import './Header.css'


export default function Header() {



    return (
        <>
            <Link to='/'>
                <img className="header__icon" src={mySVG} />
            </Link>
            <nav className="header__nav">
                <a className="header__links">
                    Join as a HandyMan
                </a>
                <a className="header__links">
                    Sign Up
                </a>
                <a className="header__links">
                    Login
                </a>
            </nav>
        </>
    )
}