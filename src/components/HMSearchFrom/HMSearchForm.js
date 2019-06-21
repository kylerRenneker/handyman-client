import React, { useContext } from 'react'
import { services } from '../../dummyData'
import { providers } from '../../dummyData'
import ProviderListContext from '../../contexts/ProviderListContext'

console.log(services)

export default function HMSearchForm(props) {
    const context = useContext(ProviderListContext)

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })

    const submitSearch = (ev) => {
        ev.preventDefault();

        const { zipcode } = ev.target
        const { options } = ev.target

        const service = Number(options.value)

        const providersList = providers.filter(provider => {
            return provider.location === zipcode.value && provider.services.includes(service)
        })

        context.setProviderList(providersList)

        console.log('context after submit: ', context)
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
