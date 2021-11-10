import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    useRouteMatch,
    Link,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const AdminNavigation = () => {
    let { path, url } = useRouteMatch();

    const { logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'><Navbar.Brand>Admin</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/manageAllOrders`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Manage All Orders
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/addProducts`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Add A Products
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/makeAdmin`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Make Admin
                            </NavLink>
                            <NavLink
                                className='text-decoration-none mx-3 fs-5 text-light ms-3 mt-4'
                                to={`${url}/manageProducts`}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Manage Products
                            </NavLink>
                            <Button onClick={logout}>Logout</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>

                <Route path={`${path}/manageAllOrders`}>
                    <ManageAllOrders />
                </Route>
                <Route path={`${path}/addProducts`}>
                    <AddProducts />
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                </Route>
                <Route path={`${path}/manageProducts`}>
                    <ManageProducts />
                </Route>
            </Switch>
        </div>
    );
};

export default AdminNavigation;