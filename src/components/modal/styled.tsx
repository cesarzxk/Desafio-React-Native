import styled from 'styled-components/native';

export const Header = styled.View`
position:absolute;
width:65px;
height:30px;
background-color:#ED5858;
border-bottom-left-radius:50px;
border-bottom-right-radius:50px;
`;


export const ContainerModal = styled.Modal`
`;

export const Fade = styled.View`
height:100%;
width:100%;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.5);
`;

export const ContainerPostBox =styled.View`
border:5px solid #ED5858;


padding-top:50px;
width: 96%;
height: 520px;
background-color:#C4C4C4;
border-radius:25px;
justify-content:space-between;
align-items:center;
`;

export const Text = styled.Text`
position:absolute;
top:-20px;
left:20px;
font-size:20px;
`;

export const UserTextBox = styled.TextInput`
width:96%;
`;

export const TitleTextBox = styled.TextInput`
width:96%;
`;

export const PostTextBox = styled.TextInput`
height:96%;
width:96%;
text-align:justify;
text-align-vertical:top;
`;

export const ContainerUserTextBox = styled.View`
width:96%;
padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;
background-color:#ffffff
justify-content:center;
align-items:center;
border-radius:15px;
`;

export const UserBoxSelect = styled.Picker`
width:100%;
height:30px;
`;


export const ContainerTitleTextBox = styled.View`
width:96%;

padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;

background-color:#ffffff
justify-content:center;
align-items:center;
border-radius:15px;
`;


export const ContainerPostTextBox = styled.View`
width:96%;
height:50%;

padding-left:10px;
padding-right:10px;
padding-top:5px;
padding-bottom:5px;

background-color:#ffffff
justify-content:center;
align-items:center;
border-radius:15px;
`;

export const ContainerTrashIcon = styled.TouchableOpacity`
position:absolute;
right:10px;
top:10px;

background-color:#ffffff;

padding-left:6px;
padding-right:6px;
padding-top:2px;
padding-bottom:2px;

border-radius:50px;
`;



export const ContainerButtonPost = styled.View`
width:100%
align-items:center;
padding-bottom:10px;
padding-top:10px;

`
;
export const ButtonPost = styled.TouchableOpacity`
height:50px;
width:50%
background-color:#F83838;
justify-content:center;
align-items:center;
border-radius:15px;
`;

export const ButtonPostText = styled.Text`
color:#ffffff;
font-size:24px;
font-weight:bold;
`;


