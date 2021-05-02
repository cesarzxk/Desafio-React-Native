import React, { useContext, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import {
    CardBody,
    CardContainer,
    CardHeader, 
    User,
    InitContainer,
    Initials,
    NameContainer,
    Name, 
    TitleContainer, 
    Title, 
    PostContainer, 
    Post,
    IconContainer,
    Container
} from './styled';
import DataCard from './pressed';
import api from '../../services/api';
import { GlobalContext} from '../../context';

type item ={
    id:number;
    title:string;
    body:string;
    userId:number;
}

type userItem ={
    id:number;
    name:string;
    username:string;
    email:string;
    address: {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo: {
        lat:string;
        lng:string;
      }
    },
    phone:string;
    website:string;
    company: {
      name:string;
      catchPhrase:string;
      bs:string;
    }
}



export default function Card({data}:{data:item}){
    const [isPressed, setIspressed] = useState(false);
    const [cardData, setCardData] = useState<userItem>();
    const {getName, deleteItemById} =  useContext(GlobalContext);


    async function getData(id:number) {
        await api.get(`users/${id}`).then((response)=>{
            setCardData(response.data);
            
        })
    }


    const nameArray = getName(data.userId)?.split(' ');
    
    let initials = undefined;

    if (nameArray!=undefined){
        initials =  (nameArray[0].substring(0,1))+(nameArray[1].substring(0,1));
    }
    
    const name = getName(data.userId)


    useEffect(()=>{
        if (isPressed){
            getData(data.userId);
        }
        
    },[isPressed]);

    return(
        <Container>
            <CardContainer>
                <CardHeader>
                    <User style={isPressed && {backgroundColor:'#ffffff'}} 
                    onPress={()=>{setIspressed(!isPressed);}
                    }>
                        <InitContainer style={isPressed && {borderWidth:1}}>
                            <Initials style={isPressed && {color:'#000000'}}>{initials}</Initials>
                        </InitContainer>

                        <NameContainer>
                            <Name style={isPressed && {color:'#000000'}}>{name}</Name>
                        </NameContainer>

                        
                    </User>
                    <IconContainer onPress={()=>{deleteItemById(data.id)}}>
                        <FontAwesome name="trash-o" size={24} color="black" />
                    </IconContainer>
                </CardHeader>
                
                    {isPressed? (
                        <DataCard data={cardData}/>
                    ):(
                        <CardBody>
                            <TitleContainer>
                                <Title>{data.title}</Title>
                            </TitleContainer>
                            <PostContainer>
                                <Post>{data.body}</Post>
                            </PostContainer>
                        </CardBody>
                    )}
            </CardContainer>
        </Container>
    )
}