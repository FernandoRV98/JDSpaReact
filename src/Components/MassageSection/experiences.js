import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../Firebase/firebase';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemCard from './itemMassage';

function Experiences() {
    const [massages, setMassages] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, 'massages'));
            setMassages(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };

        fetchData();
    }, []);

    let centerSlidePercentage;
    if (windowWidth >= 1200) {
        centerSlidePercentage = 20; // Muestra 5 tarjetas en pantallas grandes
    } else if (windowWidth >= 992) {
        centerSlidePercentage = 25; // Muestra 4 tarjetas en pantallas medianas
    } else if (windowWidth >= 768) {
        centerSlidePercentage = 33.33; // Muestra 3 tarjetas en pantallas pequeñas
    } else if (windowWidth >= 576) {
        centerSlidePercentage = 50; // Muestra 2 tarjetas en pantallas muy pequeñas
    } else {
        centerSlidePercentage = 100; // Muestra 1 tarjeta en pantallas extra pequeñas
    }

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            centerMode
            centerSlidePercentage={centerSlidePercentage}
            autoPlay
            interval={3000}
            infiniteLoop
        >
            {massages.map((massage) => (
                <div key={massage.id} style={{margin: '10px'}}>
                    <ItemCard massage={massage}/>
                </div>
            ))}
        </Carousel>
    );
}

export default Experiences;