import React, { useState } from 'react'

const HandymanListContext = React.createContext({
    handymanList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setHandymanList: () => { },
})

export default HandymanListContext

export function HandymanListProvider(props) {

    const [handymanList, setHandymanList] = useState(null)
    const [service, setService] = useState(null)
    const [currentZipCode, setCurrentZipCode] = useState(null)
    const [error, setError] = useState(null)

    const setHandymanListFn = handymanList => {
        setHandymanList(handymanList)
    }

    const clearHandymanList = () => {
        setHandymanList(null)
    }

    const setCurrentZipCodeFn = zipcode => {
        setCurrentZipCode(zipcode)
    }

    const setServiceFn = service => {
        setService(service)
    }

    const setErrorFn = error => {
        setError(error)
    }

    const clearError = () => {
        setError(null)
    }

    const value = {
        handymanList: handymanList,
        setHandymanList: setHandymanListFn,
        clearHandymanList: clearHandymanList,
        currentZipCode: currentZipCode,
        setCurrentZipCode: setCurrentZipCodeFn,
        service: service,
        setService: setServiceFn,
        error: error,
        setError: setErrorFn,
        clearError: clearError
    }

    return (
        <HandymanListContext.Provider value={value}>
            {props.children}
        </HandymanListContext.Provider>
    )
}