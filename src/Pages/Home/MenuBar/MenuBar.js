import React from 'react';
import './MenuBar.css'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFIrebase from '../../../Hooks/useFIrebase';

const MenuBar = () => {
  const {user, logOut} = useFIrebase({})
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    {/* <Container> */}
    <Navbar.Brand>MyTraval</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="ms-auto">
      <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
      <Nav.Link as = {Link} to="/addService">Add Service</Nav.Link>
      <Nav.Link as = {Link} to="/register">Register</Nav.Link>
      <Nav.Link as = {Link} to="#pricing">Pricing</Nav.Link>
      {
        user.email?<Nav.Link as = {Link} onClick = {logOut} to="/logout">Log Out</Nav.Link>: <Nav.Link as = {Link} to="/login">Log In</Nav.Link>
      }
      {
        user.displayName && <Nav.Link>{user.displayName}</Nav.Link> &&
        user.displayName && <Nav.Link ><Image className = 'w-25' src={user?.reloadUserInfo?.photoUrl} alt="" roundedCircle  /></Nav.Link>
      }
      {/* {
         user.displayName && <Nav.Link><Image className = 'w-25' src={user?.reloadUserInfo?.photoUrl} alt="" roundedCircle  /></Nav.Link>
      } */}
    </Nav>
    </Navbar.Collapse>

    {/* </Container> */}
  </Navbar>
        </div>
    );
};

export default MenuBar;