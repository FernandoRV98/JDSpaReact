import React from 'react'
import logo from '../../images/jdspalogo.png';
import {
    Nav,
    NavbarContainer,
    NavLogo,
} from './NavbarElements'

const MassageDetailsNavbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={logo} width={100}/>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default MassageDetailsNavbar