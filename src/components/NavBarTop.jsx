import React, { useState } from 'react';
import styled from './NavBarTop.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

export function NavBarTop(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand='md' className='container'>
        <NavbarBrand href="/" className={styled.logo}>Sneakers</NavbarBrand>
        <NavbarToggler onClick={toggle} className={styled.toggleButton}><img src="/icon-menu.svg" alt="" /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className={styled.listItens}>
              <NavLink href="#">Collections</NavLink>
            </NavItem>
            <NavItem className={styled.listItens}>
              <NavLink href="#">Men</NavLink>
            </NavItem>
            <NavItem className={styled.listItens}>
              <NavLink href="#">Women</NavLink>
            </NavItem>
            <NavItem className={styled.listItens}>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem className={styled.listItens}>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
          <div className={styled.rightSide}>
            <NavbarText><img src="icon-cart.svg" alt="" className={styled.cart}/></NavbarText>
            <NavbarText><img src="image-avatar.png" alt="" className={styled.avatar}/></NavbarText>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
