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

function MassageDetails() {
    const {id} = useParams();
    const [massage, setMassage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'massages', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setMassage(data);
                setSelectedImage(data.images[0]); // Inicializar la imagen seleccionada con la primera imagen
            } else {
                console.log('No such document!');
            }
        };

        fetchData();
    }, [id]);

    if (!massage) {
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
                            <Image src={selectedImage} alt={massage.name}/> {/* Usar la imagen seleccionada */}
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <Title>{massage.name}</Title>
                                <Divider light/>
                            </Grid>
                            <Grid item xs={12}>
                                <Description>{massage.description}</Description>
                                <Price>Precio: ${massage.price}</Price>
                                <Duration>Duración: {massage.time}</Duration>
                                <Divider light/>
                            </Grid>
                            <CategoryGrid item xs={12}>
                                <CategoryLabel>Categoría: </CategoryLabel><CategoryValue>{massage.category}</CategoryValue>
                            </CategoryGrid>
                        </Grid>
                        <Grid item xs={12}>
                            <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
                                {massage.images.map((img, index) => (
                                    <ImageListItem key={index}>
                                        <img
                                            src={img}
                                            alt={massage.name}
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

export default MassageDetails;