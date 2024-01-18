// Components/HomeSection/ControlledCarousel.js
import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {getAdvertisements} from "./getAdvertisements";

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
                <Carousel.Item key={idx}>
                    <img
                        src={ad.img}
                        alt={`Slide ${idx + 1}`}
                        style={{
                            width: '100%',
                            height: '80vh', // Limitar la altura de las imágenes
                            objectFit: 'cover'
                        }}
                    />
                    <Carousel.Caption>
                        <h3>{`Slide label ${idx + 1}`}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;