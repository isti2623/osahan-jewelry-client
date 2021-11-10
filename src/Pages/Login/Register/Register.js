import React, { useState } from 'react';
import { Alert, Spinner, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import Navigation from '../../Shared/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <h2 className='text-danger fs-1 fw-bold my-5'>Register</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={handleLoginSubmit}>
                            <input
                                className="mt-5"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                                required
                                onBlur={handleOnBlur}
                            />
                            <br />
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
                            <input
                                className="mt-3 mb-3"
                                placeholder="Your Confirm Password"
                                name="password2"
                                type="password"
                                required
                                onBlur={handleOnBlur}
                            />
                            <br />

                            <Button className="mt-3 mb-5" type="submit" variant="danger">Register</Button>

                            <Link to='/login'><p className='text-danger'>Already Register? Please Login</p></Link>

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

export default Register;