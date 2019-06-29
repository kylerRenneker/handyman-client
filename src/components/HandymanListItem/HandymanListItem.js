import React from 'react'
import { Link } from 'react-router-dom'
import './HandymanListItem.css'

export default function ProviderListItem(props) {
    const { provider } = props
    console.log('provider within ProviderListItem: ', provider)
    return (
        <Link to={`/handymen/${provider.id}`} className="link__handyman">
            <header className='list__item__header'>
                <h2>{provider.provider_name}</h2>
            </header>
            <div>Rating: {provider.average_review_rating ? parseInt(provider.average_review_rating) : 'No current rating'}</div>
        </Link>
    )
}