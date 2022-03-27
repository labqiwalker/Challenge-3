import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export const NavbarDefault = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container className="right-side">

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Container>
</Navbar>
    </div>
    
  )
}



