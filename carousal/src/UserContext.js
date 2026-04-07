import {createContext, useContext, useState} from 'react'

const UserContext = createContext()

export const useNameContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [userName, setUserName] = useState(null)

    const login = () => {
        setUserName("Swathi")
    }

    const logout = () => {
        setUserName(null)
    }

    return(
        <UserContext.Provider value={{userName, login, logout}}>{children}</UserContext.Provider>
    )
}