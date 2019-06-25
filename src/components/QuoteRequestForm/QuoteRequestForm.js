import React, { useContext } from 'react'
import './QuoteRequestForm.css'

import { services } from '../../dummyData'
// import HandymanContext from '../../contexts/HandymanContext'

export default function QuoteRequestForm(props) {

    // const context = useContext(HandymanContext)

    console.log(props)

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })

    const handleSubmit = (ev) => {
        ev.preventDefault()

    }

    return (
        <form className='quote__form' onSubmit={handleSubmit}>
            <label htmlFor='location'>Location</label>
            <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="location" name="zipcode"></input>

            <label htmlFor='options'>Select a needed service</label>
            <select id='options' name="options">
                {options}
            </select>

            <label htmlFor='quoteRequest__email'>Email</label>
            <input required type='email' id='quoteRequest__email'></input>

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