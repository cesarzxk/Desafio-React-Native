import styled from 'styled-components/native';


export const CardHeader = styled.View`
position:relative;
`;

export const InitContainer = styled.View`
left:2px;
border-radius:100px;
padding:5px;
background-color:#FFFFFF;
height:35px;
width:35px;

justify-content:center;
`;

export const Initials = styled.Text`
text-align:center;
color:#F0BDBD;
`;

export const NameContainer = styled.View``;

export const Name = styled.Text`
left:10px;
font-size:15px;
color:#FFFFFF;
`;

export const User = styled.TouchableOpacity`
position:absolute;
align-items:center;
flex-direction:row;


top:5px
left:2%;

height:40px;
width:180px;

border-radius:100px;

background:#ED5858;
`;


export const CardContainer = styled.View`

width: 94%;
left:2%;
right:2%;


height: 300px;
background: #E4E4E4;


shadowColor: #F0BDBD;
elevation: 6;

border-bottom-left-radius:25px;
border-top-right-radius:25px;
border-bottom-right-radius:25px;
`;

export const CardBody = styled.View`
`;

export const TitleContainer= styled.View`
top:50px;
width:96%
height:45px;
left:2%;

border-bottom-left-radius:25px;
border-top-right-radius:25px;
border-bottom-right-radius:25px;

background:#F0F0F0;
`;

export const Title = styled.Text`
width:96%
text-align:center;
font-weight: bold;
`;

export const PostContainer = styled.View`
top:60px;
height:185px;
width:96%
left:2%;
right:2%;

border-bottom-left-radius:25px;
border-top-right-radius:25px;
border-bottom-right-radius:25px;

background:#F0F0F0;
`; 

export const Post = styled.Text`
width:96%
left:2%;
`;

export const IconContainer = styled.TouchableOpacity`
position:absolute;
top:10px;
right:10px;

background-color: #ffffff;

padding-left:5px;
padding-right:5px;
padding-top:2.5px;
padding-bottom:2.5px;


border-radius:50px;

`;

