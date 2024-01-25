import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: flex-start; // Modificar esto para ajustar el espacio entre el texto y la imagen
    align-items: center;
    padding: 20px;
    width: 100%;
`;

const TextContainer = styled.div`
    width: 50%;
`;

const CardTitle = styled.h2`
    font-size: 30px; // Aumentar esto para hacer el título más grande
    color: #333;
`;

const CardSubtitle = styled.h3`
    font-size: 24px; // Aumentar esto para hacer el subtítulo más grande
    color: #666;
`;

const CardInfo = styled.p`
    font-size: 18px; // Aumentar esto para hacer el texto de información más grande
    color: #999;
`;

const ImageContainer = styled.div`
    width: ${props => props.imageSize};
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
`;

const InfoCard = ({ title, subtitle, info, image, direction, imageSize }) => {
    return (
        <SectionContainer direction={direction}>
            <TextContainer>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardInfo>{info}</CardInfo>
            </TextContainer>
            <ImageContainer imageSize={imageSize}>
                <CardImage src={image} alt={title} />
            </ImageContainer>
        </SectionContainer>
    );
};

export default InfoCard;