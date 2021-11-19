import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DashboardNavBar from '../../Dashboard/DashboardNavBar/DashboardNavBar';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-tundra-00974.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className="my-5 pt-4">
            <DashboardNavBar></DashboardNavBar>
            <h1 className='text-center text-dark my-4'>Manage All Product</h1>
            <hr className="mb-4" />
            {
                products.map(product => <ManageSingleProduct key={product._id} product={product}></ManageSingleProduct>)
            }
        </Container>
    );
};

export default ManageAllProduct;