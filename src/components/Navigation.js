import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

function Navigation() {
  return (
    <>
        <Navbar key='md' bg="light" expand='md' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Full Stack Web Developer</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-$'md'`}
              aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'md'`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About Me</Nav.Link>
                  <Nav.Link href="#action2">Projects</Nav.Link>
                  <Nav.Link href="#action2">Contact Me</Nav.Link>
                  <Nav.Link href="#action2">Resume</Nav.Link>
                  <NavDropdown
                    title="Quick Links"
                    id={`offcanvasNavbarDropdown-expand-$'md'`}
                  >
                    <NavDropdown.Item href="#action3">Github</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">LinkedIn</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;