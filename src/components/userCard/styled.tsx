import styled from 'styled-components/native';

export const Container = styled.View`
width:100%;
height:80px;
align-items:center;
padding-top:5px;
`;

export const NameContainer = styled.View`
justify-content:center;
`;

export const Name = styled.Text`
text-align-vertical:center;
left:20px;
color:#000000;
font-size:15px;
`;

export const CardBody = styled.View`
padding-bottom:10px;
padding-top:10px;
width:90%;

flex-direction:row;
background: #E4E4E4;

border-radius:50px;
`;

export const InitContainer = styled.View`
left:10px;
border-radius:100px;
padding:5px;

background-color:#FFFFFF;

width:40px;
height:40px;
justify-content:center;
`;

export const Initials = styled.Text`
text-align:center;
color:#F0BDBD;
`;

export const IconContainer = styled.TouchableOpacity`
position:absolute;
top:15px;
right:10px;

background-color: #ffffff;

padding-left:5px;
padding-right:5px;
padding-top:2.5px;
padding-bottom:2.5px;


border-radius:50px;
`;
