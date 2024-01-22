import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ItemCard from './itemMassage';

function Experiences() {
    const [massages, setMassages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, 'massages'));
            setMassages(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        fetchData();
    }, []);

    return (
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={true} centerMode centerSlidePercentage={20} autoPlay interval={3000} infiniteLoop>
            {massages.map((massage) => (
                <div key={massage.id} style={{ margin: '10px' }}>
                    <ItemCard massage={massage} />
                </div>
            ))}
        </Carousel>
    );
}

export default Experiences;