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
                    "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.3358717339966!2d-99.16212542393045!3d19.44108058184016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f890233078b1%3A0x6eec118b3f74d1d!2sSystemKW!5e0!3m2!1ses!2smx!4v1709050791413!5m2!1ses!2smx\" width=\"1280\" height=\"400\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
            }}/>
        </ContactContainer>
    )
}

export default Contact