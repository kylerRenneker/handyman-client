import React, { useContext, useEffect } from 'react'
import HandymanSearchForm from '../../components/HandymanSearchFrom/HandymanSearchForm';
import './SearchLandingPage.css'
import ServiceListContext from '../../contexts/ServiceListContext'
import HandymanApiService from '../../services/handyman-api-service'

export default function SearchHandyMen(props) {
    const context = useContext(ServiceListContext)

    useEffect(() => {
        HandymanApiService.getAllServices()
            .then(context.setServices)
            .catch(context.setError)
    }, [])

    return (
        <div className="landing__search">
            <h1>Find your Handyman today.</h1>
            <HandymanSearchForm {...props} />
        </div>
    )
}