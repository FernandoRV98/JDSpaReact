import React, {useState} from 'react'
import { NavLinks } from './NavbarElements'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem
} from './NavbarElements'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({toggle}) => {
    const [activeLink, setActiveLink] = useState('home');

    const handleSetActive = (to) => {
        setActiveLink(to);
    }

    const handleSetInactive = () => {
        setActiveLink('');
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src="./jdspalogo.png" width={100}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon fontSize='large'/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} onSetActive={handleSetActive} onSetInactive={handleSetInactive} className={activeLink === 'home' ? 'activeLink' : ''}>Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='massageSection' smooth={true} duration={500} spy={true} exact='true' offset={-80} onSetActive={handleSetActive} onSetInactive={handleSetInactive} className={activeLink === 'massageSection' ? 'activeLink' : ''}>Masajes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products' smooth={true} duration={500} spy={true} exact='true' offset={-80} onSetActive={handleSetActive} onSetInactive={handleSetInactive} className={activeLink === 'products' ? 'activeLink' : ''}>Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} onSetActive={handleSetActive} onSetInactive={handleSetInactive} className={activeLink === 'contact' ? 'activeLink' : ''}>Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar