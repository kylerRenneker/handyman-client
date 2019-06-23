import React, { useState } from 'react'

// export const nullProviderList = {

// }

const HandymanListContext = React.createContext({
    handymanList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setHandymanList: () => { },
})

export default HandymanListContext

export function HandymanListProvider(props) {

    const [handymanList, setHandymanList] = useState([])
    const [error, setError] = useState(null)

    const setHandymanListFn = handymanList => {
        setHandymanList(handymanList)
    }

    const value = {
        handymanList: handymanList,
        setHandymanList: setHandymanListFn
    }

    return (
        <HandymanListContext.Provider value={value}>
            {props.children}
        </HandymanListContext.Provider>
    )
}