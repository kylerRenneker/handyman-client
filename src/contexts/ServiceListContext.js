import React, { useState } from 'react'

const ServiceListContext = React.createContext({
    serviceList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setServiceList: () => { }
})

export default ServiceListContext

export function ServiceListProvider(props) {
    const [services, setServices] = useState([])
    const [error, setError] = useState(null)

    const setErrorFn = error => {
        setError(error)
    }

    const clearError = () => {
        setError(null)
    }

    const setServicesFn = services => {
        setServices(services)
    }

    const value = {
        services: services,
        error: error,
        setError: setErrorFn,
        clearError: clearError,
        setServices: setServicesFn,
    }

    return (
        <ServiceListContext.Provider value={value}>
            {props.children}
        </ServiceListContext.Provider>
    )
}