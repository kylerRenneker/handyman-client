import React, { useState } from 'react'

// export const nullProviderList = {

// }

const ProviderListContext = React.createContext({
    providerList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setArticleList: () => { },
})

export default ProviderListContext

export function ProviderListProvider(props) {

    const [providerList, setProviderList] = useState([])
    const [error, setError] = useState(null)

    const setProviderListFn = providerList => {
        setProviderList(providerList)
    }

    const value = {
        providerList: providerList,
        setProviderList: setProviderListFn
    }

    return (
        <ProviderListContext.Provider value={value}>
            {props.children}
        </ProviderListContext.Provider>
    )
}