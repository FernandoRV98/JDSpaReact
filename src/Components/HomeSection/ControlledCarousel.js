import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {getAdvertisements} from "./getAdvertisements";
import { CarouselItem, CarouselImage } from './HomeElements.js';
import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        const fetchAdvertisements = async () => {
            const ads = await getAdvertisements();
            setAdvertisements(ads);
        };

        fetchAdvertisements();
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {advertisements.map((ad, idx) => (
                <CarouselItem key={idx}>
                    <CarouselImage
                        src={ad.img}
                        alt={`Slide ${idx + 1}`}
                    />
                    <Button variant="outlined" style={{position: 'absolute', left: '20px', bottom: '50%', transform: 'translateY(50%)', zIndex: 2}}>
                        Conoce nuestros servicios
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<GetAppIcon />}
                        style={{position: 'absolute', left: '20px', bottom: '40%', transform: 'translateY(50%)', zIndex: 2, marginTop: '10px'}}>
                        Descarga la aplicación
                    </Button>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;