import React, { createContext, ReactNode, useEffect, useState,  } from 'react';
import { Alert, StatusBar } from 'react-native';
import api from '../services/api';

type contextDate ={
    data:item[];
    isVisible:boolean;
    users:user[];
    addPost:(userName:string, title:string, Post:string)=>void;
    setIsVisible:(status:boolean)=>void;
    getName:(id:number)=>string|undefined;
    changeData:(item:item[])=>void;
    deleteItemById:(id:number)=>void;

}
type globalProvidersProps={
    children: ReactNode
}

type user={
    id:number;
    name:string;
}

type item ={
    id:number;
    title:string;
    body:string;
    userId:number;
}

export const GlobalContext = createContext({} as contextDate);

export function GlobalProviders({children}:globalProvidersProps){
    const [users, setUsers] = useState<user[]>([])
    const [data, setData] = useState<item[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [lastId, setLastId] = useState<number>(0);

    function changeData(item:item[]){
        setData(item);
    }

    async function removeData(id:number) {
        await api.delete(`posts/${id}`);
    }

    async function getLastId() {
        await api.get('posts',{params:{_limit:1,_sort:'id', _order: 'desc'}}).then((response)=>{
            setLastId(response.data[0].id);
        })
    }

    async function addData(post:item) {
        await api.post('posts', post);
    }

    function addPost(userName:string, title:string, Post:string){
        for(let i=0; i<users.length;i++){
            if (userName == users[i].name){
                addData({id:lastId+1, userId:users[i].id, body:Post, title:title});

                const item = [{id:lastId+1, userId:users[i].id, body:Post, title:title}];
                const newData = [...item , ...data];

                setData(newData);
                setLastId(lastId+1);
            }
        }
    }

    function deleteItemById(id:number){
        Alert.alert('Attention', 'Do you really want to remove? \n(is irreversible)',[
           {
               onPress: ()=>{
                const filteredData = data.filter(item => item.id !== id);
                setData(filteredData);
                removeData(id)
               },
               text:'yes'
               
           },{text:'no'}]
        )
    }

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

    useEffect(()=>{

        getNames()
        getLastId()
    
    },[])

    function getName(id:number){
        for(let i = 0; i< users.length; i++){
            if(users[i].id == id){
                return users[i].name;
            }
        }
    }

    return(
        <GlobalContext.Provider value={{
            data,
            isVisible,
            users,
            getName,
            changeData,
            deleteItemById,
            setIsVisible,
            addPost
            
        }}>
            <StatusBar hidden={true}/>
            {children}
        </GlobalContext.Provider>
    )

}

