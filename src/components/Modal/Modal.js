import React from 'react'

export default function Modal(props) {
    console.log('modal')
    const close = () => {
        props.closeModal(false)
    }
    return (
        <div className='modal__error'>
            <h2>{props.reason}</h2>
            <button className='btn__close' onClick={close}>&#9747;</button>
        </div>
    )
}