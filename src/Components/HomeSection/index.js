import React from 'react';
import {HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper} from './HomeElements';
import GetAppIcon from "@mui/icons-material/GetApp";
import video from '../../videos/intro.mp4';
import CustomButton from "./CustomButton";

const HomeSection = () => {
    const apkURL = "https://alexrios.com.mx/JD_SPA.apk"

    return (
        <HomeContainer>
            <HomeBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <HomeH1>La mejor forma de relajarte es con JD SPA</HomeH1>
                <HomeP>
                    Descarga la aplicación y conoce nuestros servicios
                </HomeP>
                <HomeBtnWrapper>
                    <a href={apkURL} download>
                        <CustomButton
                            target="_blank"
                            startIcon={<GetAppIcon/>}>
                            Descargar APP
                        </CustomButton>
                    </a>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    );
}

export default HomeSection;