import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            alert("Password didn't matched");
            return
        }
        registerUser(loginData.email, loginData.password1, loginData.name, history);
    }

    return (
        <Container className="mt-5">
            <h1 className="text-center text-dark">REGISTER</h1>
            <div className="border border-3 px-4 py-3 my-5 rounded rounded-3 shadow-lg">
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label className="text-dark fw-bold">USER NAME</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="name"
                            onBlur={handleOnBlur} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className="text-dark fw-bold">EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword1">
                        <Form.Label className="text-dark fw-bold">PASSWORD</Form.Label>
                        <Form.Control name="password1"
                            onBlur={handleOnBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword2">
                        <Form.Label className="text-dark fw-bold">PASSWORD</Form.Label>
                        <Form.Control name="password2"
                            onBlur={handleOnBlur} type="password" placeholder="Re-enter Password" />
                    </Form.Group>
                    <div className="text-center mb-2">
                        <Button type="submit" variant="outline-success">Register</Button>
                    </div>

                    <div className="text-center">
                        <NavLink className="text-decoration-none" to="/login">
                            <Button className="text-secondary" variant="text">Already Have an account?? Then Login</Button>
                        </NavLink>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Register;