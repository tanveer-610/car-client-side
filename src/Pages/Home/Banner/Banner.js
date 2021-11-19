import React from 'react';
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="custom-bg w-100 h-25 text-center pt-5 my-3">
                    <NavLink to="/products">
                        <Button className="mt-3 fw-bold" variant="success" >Explore now</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;