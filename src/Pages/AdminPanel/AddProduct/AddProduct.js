import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DashboardNavBar from '../../Dashboard/DashboardNavBar/DashboardNavBar';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productImg, setProductImg] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const history = useHistory();
    const handleNameOnBlur = (e) => {
        setProductName(e.target.value);
    }
    const handleImgOnBlur = (e) => {
        setProductImg(e.target.value);
    }
    const handlePriceOnBlur = (e) => {
        setProductPrice(e.target.value);
    }

    const handleDescriptionOnBlur = (e) => {
        setProductDescription(e.target.value);
    }
    const handleForm = (e) => {

        const data = {
            name: productName,
            img: productImg,
            description: productDescription,
            price: productPrice,
            status: 'pending'
        }
        console.log(data)
        if (productName !== '' && productImg !== '' && productDescription !== '' && productPrice !== '') {
            axios.post('https://fathomless-tundra-00974.herokuapp.com/addProduct', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert("Insertion was successful. See your Product History in All Order Section");
                        history.push('/');
                    }
                    else {
                        alert("npe");
                    }
                })
        }
        else {
            alert('Enter all Value.')
        }


        e.preventDefault();

    }
    return (
        <Container className="my-5 p-4 ">
            <DashboardNavBar></DashboardNavBar>
            <h1 className='text-center text-dark my-4'>Add New Product</h1>
            <hr className="mb-4" />

            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product's Name</Form.Label>
                    <Form.Control type="text" onBlur={handleNameOnBlur} placeholder="Enter Product's Name...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" onBlur={handleImgOnBlur} placeholder="Only Enter Image URL...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onBlur={handlePriceOnBlur} placeholder="Enter Price...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onBlur={handleDescriptionOnBlur} placeholder="Enter Details Information About Product...." as="textarea" rows={3} />
                </Form.Group>

                <div className="text-center mt-4">
                    <Button variant="outline-success" type="submit">Add New Product</Button>
                </div>

            </Form>
        </Container>
    );
};

export default AddProduct;