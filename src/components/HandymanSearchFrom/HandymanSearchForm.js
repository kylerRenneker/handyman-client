import React, { useContext, useEffect } from 'react'
import { services } from '../../dummyData'
import { providers } from '../../dummyData'
import HandymanListContext from '../../contexts/HandymanListContext'

export default function HandymanSearchForm(props) {
    const context = useContext(HandymanListContext)

    const options = services.map((service) => {
        return <option key={service.id} value={service.id}>{service.name}</option>
    })


    useEffect(() => {

    })

    console.log(props)

    const submitSearch = (ev) => {
        ev.preventDefault();

        const { zipcode } = ev.target
        const { options } = ev.target

        const service = Number(options.value)

        const handymanList = providers.filter(provider => {
            return provider.location === zipcode.value && provider.services.includes(service)
        })

        context.setHandymanList(handymanList)
        props.history.push('/handymen')
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
