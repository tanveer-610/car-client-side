import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth'

const Purchase = () => {
    const [userInfo, setUserInfo] = useState({});
    const [customerAdress, setCustomerAdress] = useState(null);
    const [customerPhone, setCustomerPhone] = useState(null)
    const [purchesProduct, setPurchesProduct] = useState({});
    const history = useHistory();
    const { _id } = useParams();
    const { user } = useAuth();
    const emailValue = user.email;


    useEffect(() => {
        fetch(`https://fathomless-tundra-00974.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setPurchesProduct(data))
    }, [])

    useEffect(() => {
        fetch(`https://fathomless-tundra-00974.herokuapp.com/users/${emailValue}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, []);

    const handleAddressOnBlur = event => {
        setCustomerAdress(event.target.value);
    }
    const handlePhoneOnBlur = event => {
        setCustomerPhone(event.target.value);
    }
    const handleForm = (e) => {

        const data = {
            customerName: userInfo.displayName,
            email: user.email,
            address: customerAdress,
            phone: customerPhone,
            productImg: purchesProduct.img,
            productName: purchesProduct.name,
            productPrice: purchesProduct.price,
            orderStatus: purchesProduct.status
        }
        if (customerAdress !== '' && customerPhone !== '') {
            axios.post('https://fathomless-tundra-00974.herokuapp.com/order', data)
                .then(res => {
                    if (res.data.insertedId) {
                        history.push('/payBill');
                    }
                    else {
                        alert("npe");
                    }
                })
        }
        else {
            alert("Enter Address and Phone Number")
        }


        e.preventDefault();

    }
    return (
        <Container className="my-5 pt-4">

            <h1 className="mb-4 text-center text-dark">Purchase</h1>
            <hr className="mb-4" />
            <Container>
                <Form onSubmit={handleForm}>
                    <div className="row g-4 mb-4">
                        <div className="col-sm-12 col-lg-6 px-5">
                            <h2 className="text-center mb-3">User's Information</h2>
                            <hr className="mb-4" />
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={userInfo.displayName} name="name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={user.email} name="email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextAddress">
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Give your Address" name="address" onBlur={handleAddressOnBlur} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                                <Form.Label column sm="2">
                                    Phone
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Give your Phone Number" name="phone" onBlur={handlePhoneOnBlur} />
                                </Col>
                            </Form.Group>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h2 className="text-center mb-3">Product Information</h2>
                            <hr className="mb-4" />
                            <div className="row align-items-center">
                                <div className="col-sm-4">
                                    <img src={purchesProduct.img} name="productImg" className="img-fluid rounded rounded-3 shadow-lg" alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <Form.Group as={Row} controlId="formPlaintextProductName">
                                        <Form.Label column sm="4">
                                            Product Name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue={purchesProduct.name} name="productName" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextProductPrice">
                                        <Form.Label column sm="4">
                                            Product Price
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control plaintext readOnly defaultValue={purchesProduct.price} name="productPrice" />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-center">
                        <Button type="submit" variant="outline-success">Place Order</Button>
                    </div>

                </Form>
            </Container>
        </Container>
    );
};

export default Purchase;