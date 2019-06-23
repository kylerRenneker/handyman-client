import React from 'react'

export default function ProviderListItem(props) {
    const { provider } = props
    console.log('provider within ProviderListItem: ', provider)
    return (
        <Link to={`/handmen/${handyman_id}`}>
            <header>
                <h2>{provider.provider_name}</h2>
            </header>
            <div>Rating: {provider.avg_rating}</div>
        </a>
    )
}