import React, { useContext, useEffect, useState } from 'react';

import Card from '../../components/card';
import {GlobalContext} from '../../context';
import{Flatlist} from './styled';

import api from '../../services/api';
import { RefreshControl } from 'react-native';

type item ={
    id:number;
    title:string;
    body:string;
    userId:number;
}

export default function CardList(){
    const{data,changeData} = useContext(GlobalContext);
    const[limite, setLimite] = useState<number>(12)
    const[isRefreshing, setIsRefreshing]=useState<boolean>(false)
   

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

    async function onRefresh(){
        setIsRefreshing(true);
        await getData()
        setIsRefreshing(false);
    }




    const renderItem = ({item}:{item:item})=>(<Card data={item}/>)


    return(
        <Flatlist 
        refreshControl={<RefreshControl onRefresh={()=>onRefresh()} refreshing={isRefreshing}/>}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        onEndReached={onEndReached}
        />
    )
}
