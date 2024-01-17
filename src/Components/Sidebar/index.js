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
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
