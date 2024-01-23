import React, {useState} from 'react'
import { Element } from 'react-scroll';
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HomeSection from "../Components/HomeSection";
import Footer from "../Components/Footer";
import Experiences from "../Components/MassageSection/experiences";
import Contact from "../Components/Contact";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection/>
            <Element name="massageSection" style={{ marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px' }}>
                <Experiences/>
            </Element>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home