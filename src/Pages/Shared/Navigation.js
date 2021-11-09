import React from 'react';
import logo from '../../images/header-logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning ms-3 mt-4'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-warning mt-4'
                                to="/explore"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Explore
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;