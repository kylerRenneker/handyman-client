import React from 'react'
import Modal from '../Modal/Modal'

export const renderModal = (handyman, user, showModal, setShowModal, text) => {
    let content, reason
    if (handyman.user_id === user.id) {
        reason = `You cannot leave a ${text} on your own handyman page...`
    }
    if (showModal) {
        console.log('show modal')
        content = <Modal showModal={showModal} reason={reason} closeModal={setShowModal} />
    }
    else {
        content = null
    }
    return (
        content
    )
}