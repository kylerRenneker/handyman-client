import React, { useContext, useEffect } from 'react'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanListItem from '../../components/HandymanListItem/HandymanListItem'
import './HandymanListPage.css'

export default function HandymanListPage(props) {

    useEffect(() => {

    })

    const context = useContext(HandymanListContext)
    console.log('context in hanymanListPage: ', context)

    const renderHandymen = () => {
        const { handymanList = [] } = context
        return handymanList.map(provider =>
            <HandymanListItem
                key={provider.id}
                provider={provider}
            />
        )
    }

    return (
        <section className="handyman__list__page">
            {renderHandymen()}
        </section>
    )

}