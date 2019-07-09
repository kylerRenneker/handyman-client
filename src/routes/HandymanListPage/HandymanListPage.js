import React, { useContext, useEffect } from 'react'
import HandymanListContext from '../../contexts/HandymanListContext'
import HandymanListItem from '../../components/HandymanListItem/HandymanListItem'
import HandymanApiService from '../../services/handyman-api-service'
import './HandymanListPage.css'

export default function HandymanListPage(props) {
    const context = useContext(HandymanListContext)

    const filterHandymenByService = (handymen, service) => {
        return handymen.filter(handyman => handyman.services.includes(service))
    }

    useEffect(() => {
        console.log(props)
        context.clearError()
        if (context.currentZipCode && context.service) {
            localStorage.setItem('service', context.service)
            localStorage.setItem('zipcode', context.currentZipCode)
        }
        const zipcode = localStorage.getItem('zipcode')
        const service = Number(localStorage.getItem('service'))

        context.setService(service)
        context.setCurrentZipCode(zipcode)

        HandymanApiService.getHandymen(zipcode, service)
            .then(handymen => {
                return filterHandymenByService(handymen, service)
            })
            .then(context.setHandymanList)
            .catch(context.setError)
        return () => {
            context.clearHandymanList()
        }
    }, [])

    const renderHandymen = () => {
        const { handymanList = [] } = context
        return handymanList.map(provider =>
            <HandymanListItem
                key={provider.id}
                provider={provider}
            />
        )
    }

    const renderPage = () => {
        const { error, handymanList } = context
        let content
        if (error) {
            content = <h2 className='error'>{error.error}</h2>

        }
        else if (!handymanList) {
            content = <div className='loading' />
        }
        else {
            content = renderHandymen()
        }
        return (
            <>
                {content}
            </>
        )
    }

    return (
        <section className='handyman__list'>
            {renderPage()}
        </section>
    )

}