import React from 'react';
import Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons'; 


import {
    NameContainer,
    Name,  
    Container,
    CardBody,
    InitContainer,
    Initials,
    IconContainer
} from './styled';

type item ={
    id:number;
    name:string
}

export default function UserCard({data}:{data:item}){
    const nameArray = data.name.split(' ');
    const initials =  (nameArray[0].substring(0,1))+(nameArray[1].substring(0,1));

    


    return(
        <Container>
            <CardBody>
                <InitContainer>
                    <Initials>{initials}</Initials>
                </InitContainer>
                <NameContainer>
                    <Name>{data.name}</Name>
                </NameContainer>
                <IconContainer onPress={()=>{Clipboard.setString(data.name);}}>
                    <Feather name="copy" size={24} color="black" />
                </IconContainer>
                
            </CardBody>
        </Container>
    )
}