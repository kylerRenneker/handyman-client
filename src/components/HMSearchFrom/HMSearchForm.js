import React from 'react'
import { services } from '../../dummyData'
import { providers } from '../../dummyData'

console.log(services)

export default function HMSearchForm(props) {
    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })
    console.log(options)

    const submitSearch = (ev) => {
        ev.preventDefault();

        const { zipcode } = ev.target
        const { options } = ev.target

        const service = Number(options.value)
        const providersList = providers.filter(provider => {
            return provider.location === zipcode.value && provider.services.includes(service)
        })

        console.log(providersList)
    }

    return (
        <form onSubmit={submitSearch}>
            <select name="options">
                {options}
            </select>
            <label htmlFor="zipcode"></label>
            <input inputMode="numeric" maxLength="5" autoComplete="postal-code" id="zipcode" name="zipcode" placeholder="Zip code"></input>
            <button type="submit">Search</button>
        </form>
    );
}
