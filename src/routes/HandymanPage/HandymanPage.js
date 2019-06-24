import React, { useContext, useEffect } from 'react'
import HandymanContext from '../../contexts/HandymanContext';
import { providers, reviews } from '../../dummyData'

export default function HandymanPage(props) {
    console.log('props: ', props)

    useEffect(() => {

    })

    const context = useContext(HandymanContext)

    const handymanId = props.match.params.handyman_id

    const tempHandyman = providers.find(provider => {
        return provider.id == handymanId
    })

    const tempReviews =

        context.setHandyman(tempHandyman)

    console.log(context.handyman)

    return (
        <>
            <h1></h1>
        </>
    )
}