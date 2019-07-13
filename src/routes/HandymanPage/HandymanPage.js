import React, { useContext, useEffect, useState } from 'react'
import handymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import './HandymanPage.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import QuoteRequestForm from '../../components/QuoteRequestForm/QuoteRequestForm'
import TokenService from '../../services/token-service'
import Modal from '../../components/Modal/Modal'
import './HandymanPage.css'
import HandymanImg from './handyman-app-icon.svg'

export default function HandymanPage(props) {
    const [quoteSent, setQuoteSent] = useState(false)
    const context = useContext(handymanContext)

    useEffect(() => {
        const currentZipCode = localStorage.getItem('zipcode')
        const handymanId = Number(props.match.params.handyman_id)
        context.clearError()
        HandymanApiService.getHandymanById(handymanId, currentZipCode)
            .then(context.setHandyman)
            .catch(context.setError)
        HandymanApiService.getHandymanReviews(handymanId, currentZipCode)
            .then(context.setReviews)
            .catch(context.setError)
        if (TokenService.hasAuthToken()) {
            HandymanApiService.getUser()
                .then(context.setUser)
                .catch(context.setError)
        }
        else if (!TokenService.hasAuthToken()) {
            context.clearUser()
        }
        return () => {
            context.clearHandyman()
            context.clearUser()
        }
    }, [])

    const quoteSuccess = () => {
        setQuoteSent(true)
    }

    const renderHandyman = () => {
        const { handyman } = context;
        const reviews = context.reviews;
        return (
            <>
                <div className='handymanPage__header'>
                    <img className='handyman__image' alt='handyman' src={HandymanImg} />
                    <div className='name__rating'>
                        <h2>{handyman.provider_name}</h2>
                        <div>Average rating: {handyman.average_review_rating ? parseInt(handyman.average_review_rating) : 'No current rating'}</div>
                    </div>
                </div>
                {quoteSent ? <Modal closeModal={setQuoteSent} reason={'Quote request sent!'} /> : null}
                <QuoteRequestForm onSubmitSuccess={quoteSuccess} {...props} />
                <p className='handyman__introduction'><strong>Introduction: </strong>{handyman.introduction}</p>
                <HandymanReviews reviews={reviews} />
                <ReviewForm {...props} />
            </>
        )
    }

    const renderPage = () => {
        const { error, handyman } = context
        let content
        if (error) {
            console.log(error)
            content = <h2 className='red'>{error.error}</h2>
        } else if (!handyman.id) {
            content = <div className='loading' />
        } else {
            content = renderHandyman()
        }
        return (
            <>
                {content}
            </>
        )
    }

    function HandymanReviews({ reviews = [] }) {
        return (
            <ul className='handyman__review__list'><strong>Reviews</strong>
                {
                    reviews.map(review =>
                        < li key={review.id} className='handyman__review' >
                            <h3 className='review__header'>{review.user.full_name}</h3>
                            <div className='review__rating'>Rating: {review.rating}</div>
                            <p className='review__text'>{review.text}</p>
                        </li>
                    )
                }
            </ul>
        )
    }

    return (
        <section className='handyman__page'>
            {renderPage()}
        </section>

    )


}