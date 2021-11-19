import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Assets/Image/404.gif'
const NotFoundPage = () => {
    return (
        <Container className="mt-5 py-4 d-flex justify-content-center">
            <img src={img} className="w-50 " alt="" />
        </Container>
    );
};

export default NotFoundPage;