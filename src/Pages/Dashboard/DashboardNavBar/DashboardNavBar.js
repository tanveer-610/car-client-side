import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashboardNavBar = () => {
    const { admin } = useAuth();
    return (
        <Container>
            <Navbar bg="dark" variant="dark" className="rounded rounded-3 shadow-lg">
                <Container>
                    {
                        admin ? <Nav className="mx-auto">
                            <Nav.Link as={NavLink} to={`/manageAllOrder`}>Manage All Order</Nav.Link>
                            <Nav.Link as={NavLink} to={`/addProduct`}>Add New Product</Nav.Link>
                            <Nav.Link as={NavLink} to={`/manageAllProduct`}>Manage All Product</Nav.Link>
                            <Nav.Link as={NavLink} to={`/makeAdmin`}>Make a admin</Nav.Link>
                        </Nav>
                            :
                            <Nav className="mx-auto">
                                <Nav.Link as={NavLink} to={`/myOrder`}>My Order</Nav.Link>
                                <Nav.Link as={NavLink} to={`/paybill`}>Pay Bill</Nav.Link>
                                <Nav.Link as={NavLink} to={`/ratings`}>Ratings</Nav.Link>
                            </Nav>
                    }

                </Container>
            </Navbar>
        </Container>
    );
};

export default DashboardNavBar;
