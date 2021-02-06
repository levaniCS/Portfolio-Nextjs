import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';


const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link port-navbar-link"> {title} </a>
  </Link>
)

const Login = () => (
  <a href="/api/login" className="nav-link port-navbar-link clickable"> Login </a>
)
const Logout = () => (
  <a href="/api/logout" className="nav-link port-navbar-link clickable"> Logout </a>
)

const Header = ({className, user}) => {
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
              {!user ? <Login /> : <Logout />}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header

