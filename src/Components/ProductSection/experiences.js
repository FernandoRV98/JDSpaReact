import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../Firebase/firebase';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from './itemProduct'; // Asegúrate de tener un componente ProductCard

function Products() {
    const [products, setProducts] = useState([]);
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
            const data = await getDocs(collection(db, 'producs')); 
            setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };

        fetchData();
    }, []);

    let centerSlidePercentage;
    if (windowWidth >= 1200) {
        centerSlidePercentage = 20;
    } else if (windowWidth >= 992) {
        centerSlidePercentage = 25;
    } else if (windowWidth >= 768) {
        centerSlidePercentage = 33.33;
    } else if (windowWidth >= 576) {
        centerSlidePercentage = 50;
    } else {
        centerSlidePercentage = 100;
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
            {products.map((producs) => ( 
                <div key={producs.id} style={{margin: '10px'}}>
                    <ProductCard product={producs}/>
                </div>
            ))}
        </Carousel>
    );
}

export default Products;