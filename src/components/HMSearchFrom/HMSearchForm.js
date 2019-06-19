import React from 'react'
import { services } from '../../dummyData'

console.log(services)

export default function HMSearchForm(props) {
    const options = services.map((service) => {
        return <option key={service.id}>{service.name}</option>
    })
    console.log(options)

    return (
        <form onSubmit={console.log('success')}>
            <select>
                {options}
            </select>
            <label for="zipcode"></label>
            <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            <button type="submit">Search</button>
        </form>
    );
}
