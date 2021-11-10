import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {

    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const DashboardNavigation = () => {
    let { path, url } = useRouteMatch();

    const { logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'><Navbar.Brand>Dashboard</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/pay`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Pay
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/myOrders`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                MyOrders
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/review`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Review
                            </NavLink>
                            <Button onClick={logout}>Logout</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>

                <Route path={`${path}/pay`}>
                    <Pay />
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
        </div>
    );
};

export default DashboardNavigation;