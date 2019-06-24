import React from 'react'
import HandymanSearchForm from '../../components/HandymanSearchFrom/HandymanSearchForm';
import './SearchLandingPage.css'

export default function SearchHandyMen(props) {


    return (
        <div className="landing__search">
            <h1>Find your Handyman today.</h1>
            <HandymanSearchForm {...props} />
        </div>
    )
}