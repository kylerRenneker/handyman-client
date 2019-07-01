import React, { useState, useContext } from 'react'
import './HandymanSignUpForm.css'
import ServiceListContext from '../../contexts/ServiceListContext'

export default function HandymanSignUpForm(props) {
    const context = useContext(ServiceListContext)

    const servicesOptions = context.services.map(service => {
        return <>
            <label for={service.id}>
                <input id={service.id} type='checkbox' name='services[]' value={service.id} />{service.name}</label>

        </>
    })

    return (
        <>
            <div className='display_name'>
                <label htmlFor='HandymanSignUpForm__display_name'>
                    Display name
                </label>
            </div>
            <div className='location'>
                <label htmlFor="zipcode">Your location</label>
                <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            </div>
            <div className='handyman__services'>
                <p>Choose the services you can provide:</p>
                {servicesOptions}

            </div>
        </>
    )
}