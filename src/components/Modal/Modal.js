import React from 'react'

export default function Modal(props) {
    console.log('modal')
    return (
        <div className='modal__error'>
            <h2>{props.reason}</h2>
            <button className='btn__close' onClick={() => props.closeModal(false)}>&#9747;</button>
        </div>
    )
}