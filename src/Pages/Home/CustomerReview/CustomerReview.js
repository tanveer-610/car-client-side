import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleCustomerReview from './SingleCustomerReview/SingleCustomerReview';

const CustomerReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rating')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <Container className="my-5 shadow-lg p-4 rounded rounded-3">
            <h2 className="text-center text-dark mb-3">Our Satisfied Customer's Saying</h2>
            <hr className="mb-5" />
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {
                    review.map(singleReview => <SingleCustomerReview key={singleReview._id} singleReview={singleReview}></SingleCustomerReview>)
                }
            </div>

        </Container>
    );
};

export default CustomerReview;
