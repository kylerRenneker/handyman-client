import React, { useContext, useEffect } from 'react'
import HandymanContext from '../../contexts/HandymanContext';
import { providers, reviews, users } from '../../dummyData'

export default function HandymanPage(props) {
    const context = useContext(HandymanContext)

    console.log('props: ', props)

    useEffect(() => {
        const handymanId = props.match.params.handyman_id
        //tempHandyman and tempReviews will be replaced with api requests handled in a HandymanApiService file
        const tempHandyman = providers.find(provider => {
            return provider.id == handymanId
        })
        const tempReviews = reviews.filter(review => {
            return review.provider_id == handymanId
        })
        context.setHandyman(tempHandyman)
        context.setReviews(tempReviews)
    }, [])



    const { handyman } = context;


    return (
        <>
            <h2>{handyman.provider_name}</h2>
            <div>Average rating: {handyman.avg_rating}</div>
            <p><strong>Introduction: </strong>{handyman.introduction}</p>
            <HandymanReviews reviews={context.reviews} />
        </>
    )

    function HandymanReviews({ reviews = [] }) {

        return (
            <ul><strong>Reviews</strong>
                {
                    reviews.map(review =>
                        <li key={review.id}>
                            <h3>{users.find(user => {
                                return user.id == review.user_id
                            }).user_name}</h3>
                            <div>Rating: {review.rating}</div>
                            <p>{review.text}</p>
                        </li>
                    )
                }
            </ul>
        )
    }
}