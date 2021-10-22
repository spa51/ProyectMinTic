import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {

    const handleSignOut=(e)=>{
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });   
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>CP3</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/store">Inicio</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    
                    <NavDropdown.Item as={Link} to="/store/tecnologia">Tecnología</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/store/hogar">Hogar</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/store/saludybelleza">Salud y Belleza</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/store/deportes">Deportes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <Nav>
                    <Nav.Link as={Link} to="/user/login">Iniciar Sesión</Nav.Link>
                        <Nav.Link eventKey={2} onClick={handleSignOut}>
                            Cerrar Sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;