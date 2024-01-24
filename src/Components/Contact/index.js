import React from 'react'
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    MapContainer
} from './ContactElements'

export const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactWrapper>
                <ContactRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Contactanos</TopLine>
                            <Heading>¿Deseas algún servicio en particular?</Heading>
                            <Subtitle>Celular: 55 2379 7688</Subtitle>
                            <Subtitle>Email:
                                <a href="mailto:" target="_blank" rel="noopener noreferrer"/>
                            </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={require('../../images/contact.jpg')} alt='contact'/>
                        </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
            <MapContainer dangerouslySetInnerHTML={{
                __html:
                    "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1468058681926!2d-98.84422122494385!3d19.23243268200467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1edeb90baded%3A0xcde95624c99f93f1!2sTecnol%C3%B3gico%20de%20Estudios%20Superiores%20de%20Chalco!5e0!3m2!1ses-419!2smx!4v1706052158071!5m2!1ses-419!2smx\" width=\"1280\" height=\"400\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
            }}/>
        </ContactContainer>
    )
}

export default Contact