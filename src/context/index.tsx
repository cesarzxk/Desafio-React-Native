import React, { createContext, ReactNode, useContext, useEffect, useState,  } from 'react';
import api from '../services/api';

type contextDate ={
    getName:(id:number)=>string|undefined;
}
type globalProvidersProps={
    children: ReactNode
}

type user={
    id:number;
    name:string;
}

export const GlobalContext = createContext({} as contextDate);

export function GlobalProviders({children}:globalProvidersProps){
    const[users, setUsers] = useState<user[]>([])

    async function getNames() {
        await api.get('users').then(response =>{
            const names = response.data.map((data:user)=>{
                return{
                    id:data.id,
                    name:data.name
                }
            })
            setUsers(names)
        }) 
        
    }

    useEffect(()=>{getNames()},[])

    function getName(id:number){
        for(let i = 0; i< users.length; i++){
            if(users[i].id == id){
                return users[i].name;
            }
        }
    }

    return(
        <GlobalContext.Provider value={{
            getName
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

