
import React from 'react'
import { Offcanvas, Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>

      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' collapseOnSelect expand={expand} className="mb-3">
          <Container fluid>
            <LinkContainer to='/'>
              <Navbar.Brand >JMerch</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


    </header>
  )
}

export default Header