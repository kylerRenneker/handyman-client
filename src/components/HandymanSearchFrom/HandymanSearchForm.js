import React, { useContext, useEffect, useState } from 'react'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanApiService from '../../services/handyman-api-service'
import ServiceListContext from '../../contexts/ServiceListContext'

export default function HandymanSearchForm(props) {
    const context = useContext(HandymanListContext)
    const servicesContext = useContext(ServiceListContext)
    const services = servicesContext.services

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })

    const submitSearch = (ev) => {
        ev.preventDefault();

        const { zipcode } = ev.target
        const { options } = ev.target
        const selectedService = Number(options.value)

        context.setService(selectedService)
        context.setCurrentZipCode(zipcode.value)

        props.history.push('/handymen')
    }

    return (
        <form onSubmit={submitSearch} className='form__handyman'>
            <select name="options">
                {options}
            </select>
            <label htmlFor="zipcode"></label>
            <input required inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            <button type="submit">Search</button>
        </form>
    );
}
