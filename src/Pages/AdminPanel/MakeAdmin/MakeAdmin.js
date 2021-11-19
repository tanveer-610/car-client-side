import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardNavBar from '../../Dashboard/DashboardNavBar/DashboardNavBar';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = (e) => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Okay.Done')
                }
                else {
                    alert('Admin Making Is not Possible')
                }
            })


        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) => {
        alert("Making Admin Successful!");
        e.preventDefault();
    }
    return (
        <Container className="my-5 pt-4">
            <DashboardNavBar></DashboardNavBar>
            <h1 className="text-center text-dark my-4">Make New Admin</h1>
            <hr className=" mb-5" />
            <form onSubmit={handleAdminSubmit} className="">
                <div className="input-group mb-3">
                    <input type="Email" className="form-control" placeholder="Add Email...." aria-label="admin" aria-describedby="button-addon2"
                        onBlur={handleOnBlur}
                    />
                    <Button variant="outline-success" type="submit" id="button-addon2">Make Admin</Button>
                </div>
            </form>
        </Container>
    );
};

export default MakeAdmin;
