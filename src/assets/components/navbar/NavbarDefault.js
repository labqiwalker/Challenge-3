import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import Cardname from '../../img/Header/Group 15.png'

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

    <div className='icon-nama d-flex'>
    <img src={Cardname} alt="" />
    <p>Unis Badri</p>
    <DropdownButton id="dropdown-basic-button" title="">
      <Dropdown.Item href="#/action-1">LogOut</Dropdown.Item>
    </DropdownButton>
    </div>
  </Container>
</Navbar>
    </div>
    
  )
}



