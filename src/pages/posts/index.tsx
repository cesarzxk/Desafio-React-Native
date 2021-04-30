import React from 'react';
import {View} from 'react-native';
import { Header,Footer, Container, Body, Button, ButtonText} from './styled';
import CardList from '../../components/cardList';





export default function posts(){
    
    return(
        <Container>
            <Header/>
            <Body>
                <CardList/>
            </Body>
            <Footer>
                <Button onPress={()=>{}}>
                    <View>
                        <ButtonText>New Post</ButtonText>
                    </View>
                </Button>
            </Footer>
        </Container>
    )


}