import React, { useContext, useEffect } from 'react'
import './QuoteRequestForm.css'
import ServiceListContext from '../../contexts/ServiceListContext'
import HandymanApiService from '../../services/handyman-api-service'

export default function QuoteRequestForm(props) {
    const context = useContext(ServiceListContext)
    const { handyman, userEmail } = props



    const renderEmailInput = () => {
        let email

        if (userEmail) {
            email = <input required type='email' id='quoteRequest__email' value={userEmail.email}></input>
        }
        else {
            email = <input required type='email' id='quoteRequest__email'></input>
        }
        return email
    }

    const options = context.services.map((service) => {
        if (handyman.services.includes(service.id)) {
            return <option key={service.id} value={service.id}>{service.name}</option>
        }
    })

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    const handleSubmit = (ev) => {
        ev.preventDefault()

    }

    return (
        <form className='quote__form' onSubmit={handleSubmit}>
            <label htmlFor='location'>Location</label>
            <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="location" name="zipcode" value={handyman.location}></input>

            <label htmlFor='options'>Select a needed service</label>
            <select id='options' name="options">
                {options}
            </select>

            <label htmlFor='quoteRequest__email'>Email</label>
            {renderEmailInput()}

            <textarea
                className='quoteRequest__textArea'
                required
                aria-label='Provide a description of the work you need...'
                placeholder='Provide a description of the work you need completed...'
                id='text'
                cols='30'
                rows='5'
            >
            </textarea>
            <button type='submit'>Quote Request</button>

        </form>
    )
}