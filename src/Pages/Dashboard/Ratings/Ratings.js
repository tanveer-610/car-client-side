import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';

const Ratings = () => {
    const [userInfo, setUserInfo] = useState({});
    const history = useHistory();
    const { user } = useAuth();

    const emailValue = user.email;
    const [customerComment, setCustomerComment] = useState('');
    const [customerRatings, setCustomerRatings] = useState('');

    const handleCommentOnBlur = event => {
        setCustomerComment(event.target.value);
    }
    const handleRatingsOnBlur = event => {
        const ratings = parseInt(event.target.value);
        if (ratings > 5) {
            setCustomerRatings('5')
        }
        else {
            setCustomerRatings(event.target.value)
        }
    }

    useEffect(() => {
        fetch(`https://fathomless-tundra-00974.herokuapp.com/users/${emailValue}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, []);

    const handleForm = (e) => {

        const data = {
            customerName: userInfo.displayName,
            email: user.email,
            comments: customerComment,
            ratings: customerRatings,
        }

        if (customerComment !== '') {
            axios.post('https://fathomless-tundra-00974.herokuapp.com/ratings', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert("Review is recorded");
                        history.push('/home');
                    }
                    else {
                        alert("npe");
                    }
                })
        }
        else {
            alert("Enter Some Comment at first");
        }

        e.preventDefault();

    }
    return (
        <div className="my-5 pt-4">
            <DashboardNavBar></DashboardNavBar>
            <Container>
                <div className="w-75 mx-auto my-4">
                    <Form onSubmit={handleForm}>
                        <div className="">
                            <div className="">
                                <h2 className="text-center mb-3">User's Ratings</h2>
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
                                        Feedback
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control as="textarea" rows={3} placeholder="Give your Feedback" name="Feedback" onBlur={handleCommentOnBlur} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                                    <Form.Label column sm="2">
                                        Ratings
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Ratings (1 to 5)" name="ratings" onBlur={handleRatingsOnBlur} />
                                    </Col>
                                </Form.Group>
                            </div>

                        </div>

                        <div className="text-center">
                            <Button type="submit" variant="outline-success">Save Review</Button>
                        </div>

                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Ratings;
