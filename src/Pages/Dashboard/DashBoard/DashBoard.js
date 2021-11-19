import { faCar, faPlus, faTasks, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css';
const DashBoard = () => {
    const { admin } = useAuth();
    const task = <FontAwesomeIcon icon={faTasks} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const truck = <FontAwesomeIcon icon={faTruck} />
    const car = <FontAwesomeIcon icon={faCar} />
    return (

        <Container>
            {
                admin ? <div className="row row-cols-1 row-cols-md-3 g-4 h-100 pt-2">
                    <Link to="/manageAllOrder" className="text-decoration-none text-light">
                        <div className="col ">
                            <div className="card text-center  border border-0 bg-transparent custom-card-bg">
                                <div className="fs-1">{task}</div>
                                <div className="card-body my-0">
                                    <h5 className="card-title">Manage All Order</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/addProduct" className="text-decoration-none text-light ">
                        <div className="col">
                            <div className="card text-center  border border-0 bg-transparent custom-card-bg">
                                <div className="fs-1">{plus}</div>
                                <div className="card-body my-0">
                                    <h5 className="card-title">Add a Product</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/manageAllProduct" className="text-decoration-none text-light">
                        <div className="col ">
                            <div className="card h-100 text-center  border border-0 bg-transparent custom-card-bg">

                                <div className="fs-1">{truck}</div>
                                <div className="card-body my-0">
                                    <h5 className="card-title">Manage All Product</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/makeAdmin" className="text-decoration-none text-light">
                        <div className="col ">
                            <div className="card  text-center border border-0 bg-transparent custom-card-bg">
                                <div className="fs-1">{car}</div>
                                <div className="card-body my-0">
                                    <h5 className="card-title">Make an Admin</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <Link to="/myOrder" className="text-decoration-none text-light">
                            <div className="col ">
                                <div className="card h-100 text-center py-4 border border-0 bg-transparent custom-card-bg">
                                    <i className="fas fa-car fa-7x card-img-top"></i>
                                    <div className="card-body my-0">
                                        <h5 className="card-title">My Order</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/payBill" className="text-decoration-none text-light ">
                            <div className="col">
                                <div className="card h-100 text-center py-4 border border-0 bg-transparent custom-card-bg">
                                    <i className="fas fa-7x fa-money-check-alt card-img-top"></i>
                                    <div className="card-body my-0">
                                        <h5 className="card-title">Pay Bill</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/ratings" className="text-decoration-none text-light">
                            <div className="col ">
                                <div className="card h-100 text-center py-4 border border-0 bg-transparent custom-card-bg">
                                    <i className="far fa-star fa-6x  card-img-top"></i>
                                    <div className="card-body my-0">
                                        <h5 className="card-title">Ratings</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </div>

            }
        </Container>
    );
};

export default DashBoard;