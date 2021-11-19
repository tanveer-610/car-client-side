import React from 'react';
import { Container } from 'react-bootstrap';
import DashBoard from '../DashBoard/DashBoard';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import './DashboardHome.css'


const DashboardHome = () => {
    return (
        <div className="dashboard">
            <Container className="my-5 py-3">
                <DashboardNavBar></DashboardNavBar>
                <DashBoard></DashBoard>
            </Container>
        </div>
    );
};

export default DashboardHome;