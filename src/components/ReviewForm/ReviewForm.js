import React, { useContext } from 'react'
import HandymanContext from '../../contexts/HandymanContext'
import HandymanApiService from '../../services/handyman-api-service';
import TokenService from '../../services/token-service';
import './ReviewForm.css'

export default function ReviewForm(props) {
    const context = useContext(HandymanContext)

    console.log(context)

    const handleSubmit = ev => {
        ev.preventDefault()
        const { handyman } = context
        const { text, rating } = ev.target

        if (!TokenService.hasAuthToken()) {
            props.history.push('/login')
        }


        HandymanApiService.postReview(handyman.id, text.value, Number(rating.value))
            .then(context.addReview)
            .then(() => {
                text.value = ''
            })
            .catch(context.setError)
    }

    return (
        <form
            className='ReviewForm'
            onSubmit={handleSubmit}
        >
            <textarea
                className='review__textArea'
                required
                aria-label='Type a review...'
                placeholder='Type a review if this Handyman has completed work for you...'
                id='text'
                cols='28'
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