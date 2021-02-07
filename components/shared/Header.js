import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import auth0 from '../../services/auth0'

const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link port-navbar-link"> {title} </a>
  </Link>
)

const Login = () => (
  <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
)
const Logout = () => (
  <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
)

const Header = ({className, isAuthenticated}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Levan Sarishvili</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route='/' title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route='/about' title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route='/portfolios' title="portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route='/blogs' title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route='/cv' title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              {!isAuthenticated ? <Login /> : <Logout />}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header

