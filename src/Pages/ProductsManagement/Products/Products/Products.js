import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container className="my-5 pt-3">
            <h1 className="my-4 text-center text-dark">Our All Product</h1>
            <hr className="mb-4" />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
        </Container>
    );
};

export default Products;
