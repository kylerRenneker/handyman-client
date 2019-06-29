import React, { useContext, useEffect } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import './HandymanPage.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import QuoteRequestForm from '../../components/QuoteRequestForm/QuoteRequestForm';


export default function HandymanPage(props) {
    const handymanContext = useContext(HandymanContext)

    useEffect(() => {
        const currentZipCode = localStorage.getItem('zipcode')
        const handymanId = Number(props.match.params.handyman_id)
        HandymanApiService.getHandymanById(handymanId, currentZipCode)
            .then(handymanContext.setHandyman)
            .catch(handymanContext.setError)
        HandymanApiService.getHandymanReviews(handymanId, currentZipCode)
            .then(handymanContext.setReviews)
            .catch(handymanContext.setError)
        return () => {
            handymanContext.clearHandyman()
        }
    }, [])

    const renderHandyman = () => {
        const { handyman } = handymanContext;
        const reviews = handymanContext.reviews;
        return (
            <>
                <h2>{handyman.provider_name}</h2>
                <div>Average rating: {parseInt(handyman.average_review_rating)}</div>
                <QuoteRequestForm handyman={handyman} />
                <p><strong>Introduction: </strong>{handyman.introduction}</p>
                <HandymanReviews reviews={reviews} />
                <ReviewForm />
            </>
        )
    }

    const renderPage = () => {
        const { error, handyman } = handymanContext
        console.log(error)
        let content
        if (error.error) {
            content = (error.error === 'That provider does not exist')
                ? <p className='red'>Handyman not found</p>
                : <p className='red'>There was an error</p>
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
            <ul className='.handyman__review__list'><strong>Reviews</strong>
                {
                    reviews.map(review =>
                        < li key={review.id} className="handyman__review" >
                            <h3 className='review__header'>{review.user_fullName}</h3>
                            <div className='review__rating'>Rating: {review.rating}</div>
                            <p className='review__text'>{review.text}</p>
                        </li>
                    )
                }
            </ul>
        )
    }

    return (
        renderPage()
    )


}