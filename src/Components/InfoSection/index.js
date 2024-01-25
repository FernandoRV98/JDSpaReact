import React from 'react';
import InfoCard from './InfoCard';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const InfoSection = ({ data }) => {
    return (
        <div>
            {data.map((data) => (
                <CardContainer key={data.id}>
                    <InfoCard
                        title={data.title}
                        subtitle={data.subtitle}
                        info={data.info}
                        image={data.image}
                        direction={data.direction}
                    />
                </CardContainer>
            ))}
        </div>
    );
};

export default InfoSection;