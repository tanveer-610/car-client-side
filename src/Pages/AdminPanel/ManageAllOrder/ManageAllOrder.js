import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DashboardNavBar from '../../Dashboard/DashboardNavBar/DashboardNavBar';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-tundra-00974.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container className="my-5 pt-4">
            <DashboardNavBar></DashboardNavBar>
            <h1 className='text-center text-dark my-4'>Manage All Order</h1>
            <hr className="mb-4" />
            {
                orders.map(order => <ManageSingleOrder key={order._id} orderInfo={order}></ManageSingleOrder>)
            }



        </Container>
    );
};

export default ManageAllOrder;