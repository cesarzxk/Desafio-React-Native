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


export default function DataCard (){
    return(
        <CardPressedBody>
            <PersonalDataContainer>
                <UserDataContainer>
                    <TextContainer>
                        <Text>Usename:
                            <Information></Information>
                        </Text>
                        <Text>Email:
                            <Information></Information>
                        </Text>
                        <Text>Phone:
                            <Information></Information>
                        </Text>
                        <Text>Website:
                            <Information></Information>
                        </Text>
                    </TextContainer>
                </UserDataContainer>

                <AdressContainer>
                    <TextContainer>
                        <Text>Street:
                            <Information></Information>
                        </Text>
                        <Text>City:
                            <Information></Information>
                        </Text>

                        <Text>Suit:
                            <Information></Information>
                        </Text>

                        <Text>Zipcode:
                            <Information></Information>
                        </Text>
                    </TextContainer>
                </AdressContainer>

                    <AdressTitleContent>
                            <TitleText>Adress</TitleText>
                    </AdressTitleContent>

                    <AdressGeoContainer>
                        <AdressGeoText>
                            Lat:
                            <Information></Information>
                        </AdressGeoText>

                        <AdressGeoText>
                            Ign:
                            <Information></Information>
                        </AdressGeoText>
                    </AdressGeoContainer>



            </PersonalDataContainer>
            <CompanyContainer>

                <CompanyTitleContainer>
                    <TitleText>Company</TitleText>
                </CompanyTitleContainer>

                <CompanyTextContainer>
                    <ComanyText>Name:
                        <Information></Information>
                    </ComanyText>
                    <ComanyText>BS:
                        <Information></Information>
                    </ComanyText>
                </CompanyTextContainer>

                <TextContainer>
                    <Text>CatchPhrase:
                        <Information>cccccccccccccccccccccccccccccccc</Information>
                    </Text>
                </TextContainer>

            </CompanyContainer>
        </CardPressedBody>
    )
}