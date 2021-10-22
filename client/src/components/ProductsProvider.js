import { Children, createContext, useState } from "react"

const initialState={
    paginationTechnology:1,
    user:null,
}

export const GlobalContext=createContext(initialState);

export const ContextProvider=({children})=>{
    const [state,setState]=useState(initialState)

    return(<GlobalContext.Provider value={[state,setState]}>
        {children}
    </GlobalContext.Provider>);
}