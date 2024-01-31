// massage.js
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../Firebase/firebase';
import {
    Image,
    Title,
    Description,
    Price,
    Duration,
    CategoryLabel,
    CategoryValue,
    CategoryGrid
} from './massageElements';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MassageDetailsNavbar from '../Components/Navbar/MassageDetailsNavbar';

function ProductDetails() {
    const {id} = useParams();
const [product, setProduct] = useState(null);
const [selectedImage, setSelectedImage] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        const docRef = doc(db, 'producs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setProduct(data);
            setSelectedImage(data.images[0]); // Inicializar la imagen seleccionada con la primera imagen
        } else {
            console.log('No such document!');
        }
    };

    fetchData();
}, [id]);

if (!product) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <CircularProgress color="inherit"/>
        </Box>
    );
}

return (
    <>
        <MassageDetailsNavbar/> {/* Usa Navbar */}
        <Box display="flex" justifyContent="center" alignItems="center"
             minHeight="100vh"> {/* Usa Box para centrar el contenido */}
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={6} container alignItems="center" justify="center">
                        <Image src={selectedImage} alt={product.name}/> {/* Usar la imagen seleccionada */}
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <Title>{product.name}</Title>
                            <Divider light/>
                        </Grid>
                        <Grid item xs={12}>
                            <Description>{product.description}</Description>
                            <Price>Precio: ${product.price}</Price>
                            <Duration>Cantidad: {product.disponibility}</Duration>
                            <Divider light/>
                        </Grid>
                        <CategoryGrid item xs={12}>
                            <CategoryLabel>Categoría: </CategoryLabel><CategoryValue>{product.category}</CategoryValue>
                        </CategoryGrid>
                    </Grid>
                    <Grid item xs={12}>
                        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                            {product.images.map((img, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={img}
                                        alt={product.name}
                                        loading="lazy"
                                        onClick={() => setSelectedImage(img)} // Cambiar la imagen seleccionada al hacer clic
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);
}

export default ProductDetails;