import React from 'react'
// Experiences.js
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../../Firebase/firebase';
import MultiActionAreaCard from './MultiActionAreaCard.js';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Grid';

function Experiences() {
  const [massages, setMassages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, 'massages'));
      setMassages(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  const categories = ['Masajes', 'Faciales', 'Corporales'];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <Carousel>
            {massages.filter(massage => massage.category === category)
              .reduce((resultArray, item, index) => { 
                const chunkIndex = Math.floor(index/3)

                if(!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = [] // start a new chunk
                }

                resultArray[chunkIndex].push(item)

                return resultArray
              }, [])
              .map((massageGroup, idx) => (
              <Carousel.Item key={idx}>
                <Grid container spacing={2}>
                  {massageGroup.map((massage) => (
                    <Grid item xs={12} sm={6} md={4} key={massage.id}>
                      <MultiActionAreaCard massage={massage} />
                    </Grid>
                  ))}
                </Grid>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default Experiences;


