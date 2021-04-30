import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import api from '../../services/api';
import{Flatlist} from './styled';

type item ={
    id:string;
    title:string;
    body:string;
    userId:number;
}




export default function CardList(){
    const [Data, setData]= useState<item[]>([]);
   

    async function getData() {
        await api.get('posts',{params:{_sort: 'id', _order: 'desc'}}).then((response)=>{
            setData(response.data);
        })
    }
        

    useEffect(()=>{
        getData()

    },[])

    

    const renderItem = ({item}:{item:item})=>(<Card key={item.id} data={item}/>)


    return(
        <Flatlist 
        renderItem={renderItem}
        data={Data}
        />
    )
}
