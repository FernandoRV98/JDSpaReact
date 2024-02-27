import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #362F2F;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    
    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;


export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 12px 80px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: white;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const SocialIconLink = styled.a`
    color: white;
    font-size: 24px;
    margin-right: 16px;
`;

// Modificar SocialIcons para mover los íconos a la derecha
export const SocialIcons = styled.div`
    display: flex;
    justify-content: flex-end; // Esto moverá los íconos a la derecha
    align-items: center;
    width: 240px;
`;


export const SpaName = styled.h1`
    font-size: 25px;
    color: white;
    margin-bottom: 20px;
`;

export const SpaAddress = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
`;

export const SpaWhatsApp = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
`;

export const SpaEmail = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
`;

export const ServicesTitle = styled.h1`
    font-size: 20px;
    color: white;
    margin-bottom: 15px;
`;

export const ServiceItem = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 10px;
`;

// Modificar FooterLinksContainer para tener 2 filas
export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

// Modificar FooterLinksWrapper para tener 3 columnas
export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

// Modificar WebsiteRights para abarcar 2 columnas
export const WebsiteRights = styled.small`
    color: white;
    margin-bottom: 16px;
    grid-column: span 2;
`;

