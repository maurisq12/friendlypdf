import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../Media/logo.png'
import { Link } from "react-router-dom";
import './components.css'

function Header() {
    return (
        <Navbar expand="lg" bg="light" variant="light" className='nav-style'>
            <Container style={{ display: 'flex' }}>
                <Navbar.Brand className='nav-title'>
                    <img src={logoImage} alt="Logo de la página" height="60" style={{ background: 'transparent' }} />
                    <div className='nav-title-text'>
                        Friendly PDF
                    </div>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ display: 'flex' }}>
                        <Link to="/" className="nav-link-spacing">
                            Inicio
                        </Link>
                        <Link to="/service" className="nav-link-spacing">
                            Servicio
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;

