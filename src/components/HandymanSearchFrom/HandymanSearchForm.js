import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanApiService from '../../services/handyman-api-service'
import ServiceListContext from '../../contexts/ServiceListContext'
import './HandymanSearchForm.css'

export default function HandymanSearchForm(props) {
    const context = useContext(HandymanListContext)
    const servicesContext = useContext(ServiceListContext)
    const services = servicesContext.services

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(servicesContext.setServices)
            .catch(context.setError)
    }, [])

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
            <select name="options" className='form__landing__item landing__select'>
                {options}
            </select>
            <label htmlFor="zipcode"></label>
            <input className='form__landing__item' required inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            <button className='form__landing__button' type="submit">Search</button>
        </form>
    );
}
