
import React from 'react';
import InfoCard from './InfoCard';
import Data from './Data';

const InfoSection = () => {
    return (
        <div>
            {Data.map((data, index) => (
                <InfoCard
                    key={data.id}
                    title={data.title}
                    subtitle={data.subtitle}
                    info={data.info}
                    image={data.image}
                />
            ))}
        </div>
    );
};

export default InfoSection;