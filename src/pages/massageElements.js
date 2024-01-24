import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const CategoryGrid = styled(Grid)`
    padding-top: 10px; // Agregar padding en la parte superior
`;
export const Image = styled.img`
    width: 100%;
    max-width: 800px; // Hacer la imagen más grande
    object-fit: cover;
    margin: auto; // Centrar la imagen
`;

export const Title = styled.h1`
    font-size: 2em;
    color: #000;
    margin-top: 20px;
    margin-bottom: 20px; // Agregar espacio en la parte inferior
    font-family: 'Open Sans', sans-serif; // Cambiar la fuente a Open Sans
`;

export const Description = styled.p`
    font-size: 1.2em;
    color: #666;
    text-align: justify;
    padding: 10px; // Agregar padding
`;

export const Price = styled.p`
    font-size: 1.2em; // Reducir el tamaño de la fuente
    color: #666;
    padding: 10px; // Agregar padding
`;

export const Duration = styled.p`
    font-size: 1.2em; // Reducir el tamaño de la fuente
    color: #666;
    padding: 10px; // Agregar padding
`;

export const CategoryLabel = styled.span`
    font-size: 1.0em;
    color: #000;
`;

export const CategoryValue = styled.span`
    font-size: 1.0em;
    color: #000;
    font-weight: bold; // Hacer el texto en negrita
`;