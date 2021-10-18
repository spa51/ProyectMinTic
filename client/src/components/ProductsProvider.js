import { Children, createContext, useState } from "react"

const initialState={
    paginationTechnology:1,
}

export const GlobalContext=createContext(initialState);

export const ContextProvider=({children})=>{
    const [state,setState]=useState(initialState)
    const updateContext=(value)=>{
        setState(prevState=>({...prevState,paginationTechnology:value}))
    }

    return(<GlobalContext.Provider value={[state,updateContext]}>
        {children}
    </GlobalContext.Provider>);
}