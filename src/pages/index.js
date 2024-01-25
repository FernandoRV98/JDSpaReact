import React, {useState, useEffect} from 'react'
import {Element} from 'react-scroll';
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HomeSection from "../Components/HomeSection";
import Footer from "../Components/Footer";
import Experiences from "../Components/MassageSection/experiences";
import Contact from "../Components/Contact";
import { ScrollTopButton } from "./PageElements";
import InfoSection from "../Components/InfoSection";
import {objectOne, objectThree, objectTwo} from "../Components/InfoSection/Data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > window.innerHeight) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= window.innerHeight) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, []);

    return (<>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Element name='home'>
            <HomeSection/>
        </Element>
        <InfoSection data={[objectOne, objectThree]}/>
        <Element name="massageSection"
                 style={{marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px'}}>
            <Experiences/>
            <InfoSection data={[objectTwo]}/>
        </Element>
        <Contact/>
        <Footer/>
        <ScrollTopButton show={showScroll}
                         onClick={scrollTop}/> {/* Usa ScrollTopButton en lugar de FaArrowCircleUp */}
    </>)
}

export default Home