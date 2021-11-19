import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import MySIngleOrder from './MySingleOrder/MySingleOrder';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-tundra-00974.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    const myOrders = orders.filter(order => user.email === order.email);
    return (
        <div className="my-5 pt-4">
            <DashboardNavBar></DashboardNavBar>
            <div className="mt-4">
                <h1 className="text-center text-dark">My Order</h1>
                {
                    myOrders.map(myorder => <MySIngleOrder key={myorder._id} myorder={myorder}></MySIngleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrder;