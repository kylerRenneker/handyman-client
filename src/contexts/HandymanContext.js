import React, { useState } from 'react'

const HandymanContext = React.createContext({
    handyman: {},
    reviews: [],
    user: {},
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
    const [user, setUser] = useState({})
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

    const setUserFn = user => {
        setUser(user)
    }

    const clearUser = () => {
        setUser(null)
    }

    const value = {
        handyman: handyman,
        user: user,
        reviews: reviews,
        error: error,
        setError: setErrorFn,
        clearError: clearError,
        setHandyman: setHandymanFn,
        setUser: setUserFn,
        clearUser: clearUser,
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