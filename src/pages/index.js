import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HomeSection from "../Components/HomeSection";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HomeSection/>
        <Footer />
    </>
  )
}

export default Home