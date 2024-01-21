import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({toggle}) => {
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
                            <NavLinks to='home'>Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='massage'>Masajes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products'>Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar