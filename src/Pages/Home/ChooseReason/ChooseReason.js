import React from 'react';
import { Container } from 'react-bootstrap';

const ChooseReason = () => {

    return (
        <Container className="my-5">
            <h2 className="text-center text-dark mb-3">Why choose Us?</h2>
            <hr className="mb-5" />
            <div className="row gx-4">
                <div className="col-lg-3 col-sm-12">
                    <div className="row gx-0">
                        <div className="col-3">
                            <i className="fas fa-3x fa-tag text-dark"></i>
                        </div>
                        <div className="col-9">
                            <h5 className="fw-bold">FINANCING MADE EASY</h5>
                            <p className="text-muted">Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="row gx-0">
                        <div className="col-3">
                            <i className="fas fa-3x fa-bullseye text-dark"></i>
                        </div>
                        <div className="col-9">
                            <h5 className="fw-bold">WIDE RANGE OF BRANDS</h5>
                            <p className="text-muted">With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="row gx-0">
                        <div className="col-3">
                            <i className="far fa-3x fa-comments text-dark"></i>
                        </div>
                        <div className="col-9">
                            <h5 className="fw-bold">TRUSTED BY THOUSANDS</h5>
                            <p className="text-muted">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="row gx-0">
                        <div className="col-3">
                            <i className="far fa-3x fa-list-alt text-dark"></i>
                        </div>
                        <div className="col-9">
                            <h5 className="fw-bold">
                                CAR SERVICE & MAINTENANCE</h5>
                            <p className="text-muted">Our service department maintain your car to stay safe on the road for many more years.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ChooseReason;
