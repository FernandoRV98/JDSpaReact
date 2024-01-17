import React from 'react'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks , 
  NavBtn,
  NavBtnLink
} from './NavbarElements'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src="./jdspalogo.png" width={100} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuIcon fontSize='large'/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar