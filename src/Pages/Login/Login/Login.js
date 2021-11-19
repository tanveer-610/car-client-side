import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChanged = e => {
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
        <Container className="mt-5">
            <h1 className="text-center text-dark">LOG IN</h1>
            <div className="border border-3 px-4 py-3 my-5 rounded rounded-3 shadow-lg">
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className="text-dark fw-bold">EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleOnChanged} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className="text-dark fw-bold">PASSWORD</Form.Label>
                        <Form.Control name="password" onChange={handleOnChanged} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center mb-2">
                        <Button type="submit" variant="outline-success">Log in</Button>
                    </div>

                    <div className="text-center">
                        <NavLink className="text-decoration-none" to="/register">
                            <Button className="text-secondary" variant="text">New User? Then Register First.</Button>
                        </NavLink>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Login;