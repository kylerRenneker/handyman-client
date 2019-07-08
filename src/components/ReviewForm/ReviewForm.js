import React, { useContext, useState } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service'
import TokenService from '../../services/token-service'
import { renderModal } from '../Utils/helpers'
import './ReviewForm.css'

export default function ReviewForm(props) {
    const [showModal, setShowModal] = useState(false)
    const context = useContext(HandymanContext)
    const { handyman, user } = context

    console.log(context)

    const handleSubmit = ev => {
        ev.preventDefault()
        const { text, rating } = ev.target

        if (!TokenService.hasAuthToken()) {
            props.history.push('/login')
        }
        else if (handyman.user_id === user.id) {
            setShowModal(true)
            text.value = ''
        }
        else {
            HandymanApiService.postReview(handyman.id, text.value, Number(rating.value))
                .then(context.addReview)
                .then(() => {
                    text.value = ''
                })
                .catch(context.setError)
        }
    }

    return (
        <form
            className='ReviewForm'
            onSubmit={handleSubmit}
        >
            {showModal ? renderModal(handyman, user, showModal, setShowModal, 'review') : null}
            <textarea
                className='review__textArea'
                required
                aria-label='Type a review...'
                placeholder='Type a review if this Handyman has completed work for you...'
                id='text'
                rows='5'
            >
            </textarea>
            <div className='select'>
                <label htmlFor='rating'>Rate your Handymans work!</label>
                <select
                    required
                    aria-label='Rate your Handyman'
                    name='rating'
                    id='rating'
                >
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                </select>
            </div>
            <button className='review__button' type='submit'>
                Post review
            </button>
        </form>
    )
}