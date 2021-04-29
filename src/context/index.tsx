import React, { createContext, ReactNode, useContext,  } from 'react';

type contextDate ={
    name:string;
}
type globalProvidersProps={
    children: ReactNode
}

export const GlobalContext = createContext({} as contextDate);

export function GlobalProviders({children}:globalProvidersProps){

    return(
        <GlobalContext.Provider value={{
            name:'banana'
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobal = () =>{
    useContext(GlobalContext);
}

