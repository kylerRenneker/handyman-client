import React from 'react'
import { Link } from 'react-router-dom'
import './HandymanListItem.css'

export default function ProviderListItem(props) {
    const { provider } = props
    console.log('provider within ProviderListItem: ', provider)
    return (
        <Link to={`/handymen/${provider.id}`} className="handyman__list__item">
            <header>
                <h2>{provider.provider_name}</h2>
            </header>
            <div>Rating: {provider.avg_rating}</div>
        </Link>
    )
}