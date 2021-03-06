import React from 'react';
import './MenuBar.css'
import {  Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MenuBar = () => {
  const {user, logOut} = useAuth({})
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
    <Navbar.Brand className = 'ms-5'>MyTraval</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="ms-auto">
      <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
      {
        user.email && <Nav.Link as = {Link} to="/addService">Add Service</Nav.Link>
      }
      
      {
        user.email &&<Nav.Link as = {Link} to="/myorders">My Orders</Nav.Link>

      }
      {
        user.email && <Nav.Link as = {Link} to="/manageOrders">Manage Orders</Nav.Link>
      }
      
      {
        user.email?<Nav.Link as = {Link} onClick = {logOut} to="/login">Log Out</Nav.Link>: <Nav.Link as = {Link} to="/login">Log In</Nav.Link>
      }
      {
         user.displayName && <Nav.Link>{user.displayName}</Nav.Link> 
      }
     
     {/*  {
        user.displayName && <Nav.Link ><Image className = 'w-25' src={user?.reloadUserInfo?.photoUrl} alt="" roundedCircle  /></Nav.Link>
      } */}
      
    </Nav>
    </Navbar.Collapse>


  </Navbar>
        </div>
    );
};

export default MenuBar;