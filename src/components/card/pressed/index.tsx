import React from 'react';

import{
    AdressContainer,
    AdressGeoText,
    AdressGeoContainer,
    TitleText,
    AdressTitleContent,
    CompanyContainer,
    CompanyTitleContainer,
    PersonalDataContainer,
    Text,
    TextContainer,
    Information,
    UserDataContainer,
    CardPressedBody,
    CompanyTextContainer,
    ComanyText
    
} from './styled';

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


export default function DataCard ({data}:{data:userItem}){
    return(
        <CardPressedBody>
            <PersonalDataContainer>
                <UserDataContainer>
                    <TextContainer>
                        <Text>Usename:
                            <Information>{data?.username}</Information>
                        </Text>
                        <Text>Email:
                            <Information>{data?.email}</Information>
                        </Text>
                        <Text>Phone:
                            <Information>{data?.phone}</Information>
                        </Text>
                        <Text>Website:
                            <Information>{data?.website}</Information>
                        </Text>
                    </TextContainer>
                </UserDataContainer>

                <AdressContainer>
                    <TextContainer>
                        <Text>Street:
                            <Information>{data?.address.street}</Information>
                        </Text>
                        <Text>City:
                            <Information>{data?.address.city}</Information>
                        </Text>

                        <Text>Suit:
                            <Information>{data?.address.suite}</Information>
                        </Text>

                        <Text>Zipcode:
                            <Information>{data?.address.zipcode}</Information>
                        </Text>
                    </TextContainer>
                </AdressContainer>

                    <AdressTitleContent>
                            <TitleText>Adress</TitleText>
                    </AdressTitleContent>

                    <AdressGeoContainer>
                        <AdressGeoText>
                            lat:
                            <Information>{data?.address.geo.lat}</Information>
                        </AdressGeoText>

                        <AdressGeoText>
                            lng:
                            <Information>{data?.address.geo.lng}</Information>
                        </AdressGeoText>
                    </AdressGeoContainer>



            </PersonalDataContainer>
            <CompanyContainer>

                <CompanyTitleContainer>
                    <TitleText>Company</TitleText>
                </CompanyTitleContainer>

                <CompanyTextContainer>
                    <ComanyText>Name:
                        <Information>{data?.company.name}</Information>
                    </ComanyText>
                    <ComanyText>BS:
                        <Information>{data?.company.bs}</Information>
                    </ComanyText>
                </CompanyTextContainer>

                <TextContainer>
                    <Text>CatchPhrase:
                        <Information>{data?.company.catchPhrase}</Information>
                    </Text>
                </TextContainer>

            </CompanyContainer>
        </CardPressedBody>
    )
}