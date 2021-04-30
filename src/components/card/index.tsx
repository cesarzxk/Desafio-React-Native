import React, { useState } from 'react';
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
    IconContainer
} from './styled';
import DataCard from './pressed';



export default function Card(){
    const [isPressed, setIspressed] = useState(true);

    return(
        <CardContainer>
            <CardHeader>
                <User style={isPressed && {backgroundColor:'#ffffff'}} 
                onPress={()=>{setIspressed(!isPressed); console.log(isPressed);}
                }>
                    <InitContainer style={isPressed && {borderWidth:1}}>
                        <Initials style={isPressed && {color:'#000000'}}>CV</Initials>
                    </InitContainer>

                    <NameContainer>
                        <Name style={isPressed && {color:'#000000'}}>César Vargas</Name>
                    </NameContainer>
                </User>
                <IconContainer>
                    <FontAwesome name="trash-o" size={24} color="black" />
                </IconContainer>

            </CardHeader>
            
                {isPressed? (
                    <DataCard/>
                ):(
                    <CardBody>
                        <TitleContainer>
                            <Title>sunt aut facere repellat provident occaecati excepturi optio reprehenderit.</Title>
                        </TitleContainer>
                        <PostContainer>
                            <Post>{'quia et suscipit \n suscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.'}</Post>
                        </PostContainer>
                    </CardBody>
                )}


            

        </CardContainer>
    )
}