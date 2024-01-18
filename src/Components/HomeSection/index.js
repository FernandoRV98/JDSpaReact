import React from 'react';
import ControlledCarousel from "./ControlledCarousel";
import { HomeContainer, HomeBg } from './HomeElements';
const HomeSection = () => {
    return (
        <HomeContainer>
            <HomeBg>
                <ControlledCarousel/>
            </HomeBg>
        </HomeContainer>
    );
}

export default HomeSection;