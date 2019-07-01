import React, { useState } from 'react'

// export const nullHandyman = {

// }

const HandymanContext = React.createContext({
    handyman: {},
    reviews: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setHandyman: () => { },
    clearHandyman: () => { },
    setReviews: () => { },
    addReview: () => { }
})

export default HandymanContext

export function HandymanProvider(props) {
    const [handyman, setHandyman] = useState({})
    const [reviews, setReviews] = useState([])
    const [userEmail, setUserEmail] = useState(null)
    const [error, setError] = useState({ error: null })

    const setErrorFn = error => {
        setError(error)
    }

    const clearError = () => {
        setError(null)
    }

    const setHandymanFn = handyman => {
        setHandyman(handyman)
    }

    const setReviewsFn = reviews => {
        setReviews(reviews)
    }

    const clearHandyman = () => {
        setHandyman({})
        setReviews([])
    }

    const addReview = review => {
        setReviews([
            ...reviews,
            review
        ])
    }

    const setUserEmailFn = email => {
        setUserEmail(email)
    }

    const clearUserEmail = () => {
        setUserEmail(null)
    }

    const value = {
        handyman: handyman,
        userEmail: userEmail,
        reviews: reviews,
        error: error,
        setError: setErrorFn,
        clearError: clearError,
        setHandyman: setHandymanFn,
        setUserEmail: setUserEmailFn,
        clearUserEmail: clearUserEmail,
        setReviews: setReviewsFn,
        clearHandyman: clearHandyman,
        addReview: addReview
    }
    return (
        <HandymanContext.Provider value={value}>
            {props.children}
        </HandymanContext.Provider>
    )
}