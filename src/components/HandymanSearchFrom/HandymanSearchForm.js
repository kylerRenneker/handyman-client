import React, { useContext, useEffect, useState } from 'react'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanApiService from '../../services/handyman-api-service'
import ServiceListContext from '../../contexts/ServiceListContext'
import './HandymanSearchForm.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function HandymanSearchForm(props) {
    const [loading, setLoading] = useState(true)
    const context = useContext(HandymanListContext)
    const servicesContext = useContext(ServiceListContext)
    const services = servicesContext.services

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })

    useEffect(() => {
        if (loading) {
            HandymanApiService.getAllServices()
                .then(servicesContext.setServices)
                .then(setLoading(false))
                .catch(context.setError)
        }
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
            {loading ? <LoadingSpinner /> : null}
            <select name='options' className='landingForm__item landing__select'>
                {!loading ? options : null}
            </select>
            <label className='landing__zip'>
                <input className='landingForm__item input__zipcode' required inputMode='numeric' maxLength='5' autoComplete='postal-code' id='search__zipcode' name='zipcode' placeholder='Zip code'></input></label>
            <button className='landingForm__button landingForm__item' type='submit'>Search</button>
        </form>
    );
}
