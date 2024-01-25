
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    width: 600px;
`;

const TextContainer = styled.div`
    width: 50%;
`;

const CardTitle = styled.h2`
    font-size: 20px;
    color: #333;
`;

const CardSubtitle = styled.h3`
    font-size: 16px;
    color: #666;
`;

const CardInfo = styled.p`
    font-size: 14px;
    color: #999;
`;

const ImageContainer = styled.div`
    width: 50%;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
`;

const InfoCard = ({ title, subtitle, info, image }) => {
    return (
        <CardContainer>
            <TextContainer>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardInfo>{info}</CardInfo>
            </TextContainer>
            <ImageContainer>
                <CardImage src={image} alt={title} />
            </ImageContainer>
        </CardContainer>
    );
};

export default InfoCard;