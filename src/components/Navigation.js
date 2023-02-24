import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

function Navigation(props) {
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
                <Nav.Link onClick={(e) => {
                  props.setPage('AboutMe');
                }}>
                  About Me
                </Nav.Link>
                <Nav.Link onClick={(e) => {
                  props.setPage('Projects');
                }}>
                  Projects
                </Nav.Link>
                <Nav.Link onClick={(e)=>{
                  props.setPage('ContactMe');
                }}>
                  Contact Me
                  </Nav.Link>
                <Nav.Link onClick={(e)=>{
                  props.setPage('Resume');
                }}>
                  Resume
                </Nav.Link>
                <NavDropdown
                  title="Quick Links"
                  id={`offcanvasNavbarDropdown-expand-$'md'`}
                >
                  <NavDropdown.Item href="https://github.com/DBanfieldKeller" target="_blank">Github</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.linkedin.com/in/daniel-keller-43762171/" target="_blank">LinkedIn</NavDropdown.Item>
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