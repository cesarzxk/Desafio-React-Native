import React, { useContext} from 'react';
import {View} from 'react-native';
import { Header,Footer, Container, Body, Button, ButtonText} from './styled';
import CardList from '../../components/cardList';
import Modal from '../../components/modal';
import { GlobalContext } from '../../context';


export default function Posts(){
    const {setIsVisible} = useContext(GlobalContext);
    return(
        <Container>
            <Header>
                <Modal/>
            </Header>
            <Body>
                <CardList/>
            </Body>
            <Footer>
                <Button onPress={()=>{setIsVisible(true)}}>
                    <View>
                        <ButtonText>New Post</ButtonText>
                    </View>
                </Button>
            </Footer>
        </Container>
    )


}