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







// import React from 'react'
// import styled from './NavBarTop.module.css'

// export const NavBarTop = () => {
//   return (
//     <div>
//         <nav>
//             <div className={styled.bothSide}>
//                 <div className={styled.leftSide}>
//                     <div className={styled.logo}>Sneakers</div>
//                     <ul className={styled.listnavBar}>
//                         <li>Collections</li>
//                         <li>Men</li>
//                         <li>Women</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div className={styled.rightSide}>
//                     <ul className={styled.listnavBar}>
//                         <li><img src="/icon-cart.svg" alt="" /></li>
//                         <li><img src="/image-avatar.png" alt=""  className={styled.imageAvatar}/></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }
