import React, { useContext } from 'react';
import {RefreshControl} from 'react-native';
import{Flatlist} from './styled';
import {GlobalContext} from '../../context';
import UserCard from '../userCard';


type item ={
    id:number;
    name:string;
}

export default function UserList(){
    const {users} = useContext(GlobalContext);
    
    const renderItem = ({item}:{item:item})=>(<UserCard data={item}/>)

    return(
        <Flatlist 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        data={users}
        />
    )
}
