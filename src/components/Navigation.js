import React from 'react';
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>CP3</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    
                    <NavDropdown.Item as={Link} to="/tecnologia">Tecnología</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hogar">Hogar</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/salud">Salud y Belleza</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/deportes">Deportes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Cerrar Sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;