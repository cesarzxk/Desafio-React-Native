import React, { useContext, useEffect, useState } from 'react';

import Card from '../../components/card';
import {GlobalContext} from '../../context';
import{Flatlist} from './styled';

import api from '../../services/api';

type item ={
    id:number;
    title:string;
    body:string;
    userId:number;
}

export default function CardList(){
    const{data,changeData} = useContext(GlobalContext);
    const[limite, setLimite] = useState<number>(12)
   

    async function getData() {
        await api.get('posts',{params:{_limit: limite,_sort: 'id', _order: 'desc'}}).then((response)=>{
            changeData(response.data);
        })
    }

    function onEndReached(){
        setLimite(limite+5)
    }
        

    useEffect(()=>{
        getData()

    },[])

    useEffect(()=>{
        getData()
    },[limite])



    const renderItem = ({item}:{item:item})=>(<Card data={item}/>)


    return(
        <Flatlist 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        onEndReached={onEndReached}
        />
    )
}
