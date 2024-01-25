import React from 'react'
import {SidebarContainer, Icon, StyledCloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <StyledCloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='home' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Inicio</SidebarLink>
            <SidebarLink to='massageSection' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Masajes</SidebarLink>
            <SidebarLink to='products' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Productos</SidebarLink>
            <SidebarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contacto</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar