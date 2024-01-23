import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactContainer = styled.div`
    color:#fff;
    background:#f9f9f9;

    @media screen and (max-width:768px){
        padding:100px 0;
    }
`;

export const ContactWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`;

export const ContactRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:'col2 col1';
    @media screen and (max-width:768px){
        grid-template-areas:'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`;

export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`;

export const TopLine = styled.p`
    color:#FFB4A9;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`;

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:#0d0d0d;
    @media screen and (max-width:480px){
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:#0d0d0d;
`;

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`;

export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 400px; // Ajusta esto a la altura que desees para el mapa
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -250px; // Ajusta esto al margen superior que desees
`;
export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
