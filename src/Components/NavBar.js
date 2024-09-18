import {Navbar, Nav, Container} from "react-bootstrap";
import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for navigation
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if(window.scrollY >0){
                setScrolled(true);
            } else{
                setScrolled(false);
              }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" id="toggle">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanyamchhabra-s1997/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/sanyam007?tab=repositories"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/sanyam_chhabra_/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to="/contact">
                <button className="btn"> <span>Let's Connect</span> </button>
              </HashLink>
          </span>
      </Container>
    </Navbar>
    )   
}