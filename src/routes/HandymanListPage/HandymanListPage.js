import React, { useContext } from 'react'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanListItem from '../../components/HandymanListItem/HandymanListItem'

export default function HandymanListPage(props) {

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
        <section>
            {renderHandymen()}
        </section>
    )

}