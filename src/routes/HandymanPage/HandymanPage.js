import React, { useContext, useEffect } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import './HandymanPage.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import QuoteRequestForm from '../../components/QuoteRequestForm/QuoteRequestForm';
import TokenService from '../../services/token-service';


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
        if (TokenService.hasAuthToken()) {
            HandymanApiService.getUserEmail()
                .then(handymanContext.setUserEmail)
                .catch(handymanContext.setError)
        }
        else if (!TokenService.hasAuthToken()) {
            handymanContext.clearUserEmail()
        }
        return () => {
            handymanContext.clearHandyman()
        }
    }, [])

    const renderHandyman = () => {
        const { handyman, userEmail } = handymanContext;
        const reviews = handymanContext.reviews;
        return (
            <>
                <h2>{handyman.provider_name}</h2>
                <div>Average rating: {parseInt(handyman.average_review_rating)}</div>
                <QuoteRequestForm handyman={handyman} userEmail={userEmail} {...props} />
                <p><strong>Introduction: </strong>{handyman.introduction}</p>
                <HandymanReviews reviews={reviews} />
                <ReviewForm {...props} />
            </>
        )
    }

    const renderPage = () => {
        const { error, handyman } = handymanContext
        console.log(error)
        let content
        if (error.error) {
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
        console.log(reviews)
        return (
            <ul className='.handyman__review__list'><strong>Reviews</strong>
                {
                    reviews.map(review =>
                        < li key={review.id} className="handyman__review" >
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
        renderPage()
    )


}