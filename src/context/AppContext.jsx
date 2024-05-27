'use client'

import { createContext, useEffect, useReducer } from "react"


const INITIAL_STATE = {
    theme: "dark",
    currentPage: "/profile",
}

export const AppContext = createContext(INITIAL_STATE)


const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        document.body.className = state.theme
    }, [state.theme])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

