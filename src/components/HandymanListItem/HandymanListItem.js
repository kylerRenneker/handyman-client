import React from 'react'
import { Link } from 'react-router-dom'
import HMListImg from './312334.svg'
import './HandymanListItem.css'

export default function ProviderListItem(props) {
    const { provider } = props
    return (
        <Link to={`/handymen/${provider.id}`} className='link__handyman'>
            <img className='handyman__icon' src={HMListImg} />
            <div className='handymanLink__info'>
                <header className='list__item__header'>
                    <h2>{provider.provider_name}</h2>
                </header>
                <div>Rating: {provider.average_review_rating ? parseInt(provider.average_review_rating) : 'No current rating'}</div>
            </div>
        </Link>
    )
}