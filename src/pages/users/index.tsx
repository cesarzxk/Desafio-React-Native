import React from 'react';
import UserList from '../../components/userList';
import { Header,Footer, Container, Body} from './styled';


export default function Users(){
    return(
        <Container>
            <Header/>
            <Body>
            <UserList/>
            </Body>
            <Footer/>
        </Container>
    )


}