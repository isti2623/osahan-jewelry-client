import React from 'react';
import logo from '../../images/header-logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className="container">

                    <Link to='/'><Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/home'><Nav.Link href="#action1">Home</Nav.Link></Link>
                            <Link to='/explore'><Nav.Link href="#action1">Explore</Nav.Link></Link>

                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;