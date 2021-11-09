import React from 'react';
import logo from '../../images/header-logo.png'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
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
                                className='text-decoration-none mx-3 fs-5 text-dark ms-3 mt-4'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-dark mt-4'
                                to="/explore"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Explore
                            </NavLink>
                            {
                                user.email &&
                                <NavLink
                                    className='text-decoration-none mx-3 fs-5 text-dark mt-4'
                                    to="/dashboard"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black"
                                    }}
                                >
                                    Dashboard
                                </NavLink>
                            }
                            {
                                user.email ?
                                    <Button onClick={logout}>Logout</Button>
                                    :
                                    <NavLink
                                        className='text-decoration-none mx-3 fs-5 text-dark mt-4'
                                        to="/login"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "black"
                                        }}
                                    >
                                        Login
                                    </NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;