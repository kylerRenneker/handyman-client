import React, { useContext, useEffect, useState } from 'react'
import './QuoteRequestForm.css'
import ServiceListContext from '../../contexts/ServiceListContext'
import HandymanApiService from '../../services/handyman-api-service'
import TokenService from '../../services/token-service'

export default function QuoteRequestForm(props) {
    const [error, setError] = useState(null)
    const context = useContext(ServiceListContext)
    const { handyman, user } = props

    const renderEmailInput = () => {
        let email

        if (user) {
            email = <input required type='email' id='quoteRequest__email' name='email' defaultValue={user.email}></input>
        }
        else {
            email = <input required type='email' id='quoteRequest__email' name='email'></input>
        }
        return email
    }

    const options = context.services.map((service) => {
        if (handyman.services.includes(service.id)) {
            return <option key={service.id} value={service.id} name='services'>{service.name}</option>
        }
    })

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    const handleSubmit = (ev) => {
        ev.preventDefault()
        setError(null)
        const { zipcode, services, email, description } = ev.target
        if (!TokenService.hasAuthToken()) {
            props.history.push('/login')
        }
        else {
            HandymanApiService.postQuoteRequest({
                provider_id: handyman.id,
                user_id: user.id,
                location: zipcode.value,
                email: email.value,
                description: description.value,
                services: services.value
            })
                .then(quote => {
                    description.value = ''
                })
                .catch(res => {
                    setError(res.error)
                })
        }
    }

    return (
        <form className='quote__form' onSubmit={handleSubmit}>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
            <label htmlFor='location'>Location</label>
            <input inputMode='numeric' maxLength='5' autoComplete='postal-code' id='location' name='zipcode' defaultValue={handyman.location}></input>

            <label htmlFor='options'>Select a needed service</label>
            <select id='options' name='services'>
                {options}
            </select>

            <label htmlFor='quoteRequest__email'>Email</label>
            {renderEmailInput()}

            <textarea
                className='quoteRequest__textArea'
                name='description'
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