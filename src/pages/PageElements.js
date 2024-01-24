import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const ScrollTopButton = styled(ArrowUpwardIcon)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #D6A3B2;
    z-index: 1000;
    cursor: pointer;
    height: 40px;
    display: ${props => props.show ? 'flex' : 'none'};
    border: 2px solid #bc244f; // Agrega un contorno de 2px de ancho y color #00a8ff
    border-radius: 10%; // Hace que el contorno sea redondo
`;