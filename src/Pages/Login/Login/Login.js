import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <h2 className='text-danger fs-1 fw-bold my-5'>Login</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={handleLoginSubmit}>
                            <input
                                className="mt-5 mb-3"
                                placeholder="Your Email"
                                name="email"
                                type="email"
                                required
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <input
                                className="mt-3 mb-3"
                                placeholder="Your Password"
                                name="password"
                                type="password"
                                required
                                onBlur={handleOnBlur}
                            />
                            <br />

                            <Button className="mt-3 mb-5" type="submit" variant="danger">Login</Button>

                            <Link to='/register'><p className='text-danger'>New User? Please Register</p></Link>

                            {isLoading && <Spinner animation="grow" />}
                            {user?.email && <Alert variant="success">Login successfully!</Alert>}
                            {/* {authError && <Alert variant="danger">{authError}</Alert>} */}
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid my-5' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;