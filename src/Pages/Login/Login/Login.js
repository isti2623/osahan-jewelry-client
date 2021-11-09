import React, { useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';

const Login = () => {
    const {
        user,
        registerUser,
        loginUser,
    } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");



    const hanldeName = (e) => {
        setName(e.target.value);
    };
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    // console.log(email, password);

    const handleRegister = () => {
        registerUser(email, password);
    };

    const handleLogin = () => {
        loginUser(email, password);

    };
    return (
        <>
            <Navigation></Navigation>
            <div className="div d-flex justify-content-center align-items-center">
                <div className="row container">
                    <div className="col-md-6">
                        <div>
                            <div className="form-input mt-5">
                                <input
                                    onChange={hanldeName}
                                    className="mt-2 p-2"
                                    placeholder="User Name"
                                />
                                <br />
                                <input
                                    onChange={hanldeEmail}
                                    className="mt-2 p-2"
                                    type="email"
                                    placeholder="Email"
                                />
                                <br />
                                <input
                                    onChange={hanldePassword}
                                    className="mt-2 p-2"
                                    type="password"
                                    placeholder="Password"
                                />
                                <br />
                                <div className="login-regiater-btn mt-4">
                                    <button
                                        onClick={handleRegister}
                                        className="btn btn-danger me-1"
                                    >
                                        Register
                                    </button>
                                    <button onClick={handleLogin} className="btn btn-dark text-white ms-1">
                                        Login
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-side-image">
                            <img
                                className="w-100 mt-5"
                                src="https://i.pinimg.com/originals/51/62/0d/51620db2284a7e777de6ebe67b6b4412.png"
                                alt=""
                            />
                        </div>
                        ;
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};


export default Login;