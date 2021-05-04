import React,{useContext, useState} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { GlobalContext } from '../../context';

import {
    ContainerModal,
    Fade,
    ButtonPost,
    ButtonPostText,
    ContainerButtonPost,
    ContainerPostBox,
    ContainerPostTextBox,
    ContainerTitleTextBox,
    ContainerTrashIcon,
    ContainerUserTextBox,
    Text,
    TitleTextBox,
    UserBoxSelect,
    PostTextBox,
    Header
} from './styled';


export default function Modal(){
    const {isVisible, users,setIsVisible, addPost} = useContext(GlobalContext);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    function clearData(){
        setUserName('');
        setBody('');
        setTitle('');
        setIsVisible(false)
    }




    return(
        <ContainerModal transparent={true} visible={isVisible} animationType="slide">
                    <Fade>
                        <ContainerPostBox>
                            <Header/>
                            <ContainerTrashIcon onPress={()=>{clearData()}}>
                                <FontAwesome name="trash-o" size={24} color="black" /></ContainerTrashIcon>
                            <ContainerUserTextBox>
                                <Text>User:</Text>
                                <UserBoxSelect
                                    selectedValue={userName}
                                    onValueChange={(valor) => {setUserName(String(valor))}}>

                                    <UserBoxSelect.Item key={0} label='-' value=''/>
                                    
                                    {users.map(user => {
                                        return(<UserBoxSelect.Item key={user.id} label={user.name} value={user.name}/>)
                                    })}
                                
                                </UserBoxSelect>
                            </ContainerUserTextBox>

                            <ContainerTitleTextBox>
                                <Text>Title:</Text>
                                <TitleTextBox value={title} onChangeText={text =>setTitle(text)}/>
                            </ContainerTitleTextBox>
                            
                            <ContainerPostTextBox>
                                <Text>Post:</Text>
                                <PostTextBox value={body} onChangeText={text =>setBody(text)} multiline = {true}/>
                            </ContainerPostTextBox>

                            <ContainerButtonPost>
                                <ButtonPost onPress={()=>{addPost(userName,title,body); clearData()}}>
                                    <ButtonPostText>Post</ButtonPostText>
                                </ButtonPost>
                            </ContainerButtonPost>
                        </ContainerPostBox>
                    </Fade>
        </ContainerModal>
        )
}