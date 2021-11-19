import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Assets/Image/logo.png';
import './Footer.css'
const Footer = () => {

    const home = <FontAwesomeIcon icon={faHome} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    //Send complain by email
    const sendMsg = () => {
        var msgBody = document.getElementById('msg-id').value;
        window.open('mailto:carhouse@gmail.com?subject=subject&body=' + msgBody);
    }
    return (
        <div className="bg-dark py-4">
            <h1>hello</h1>
            <Container className="mb-4">
                <div className="row align-items-center">

                    <div className="col-sm-12 col-lg-6">
                        <div className="text-center mb-4">
                            <p>
                                <img src={img} width="100px" height="80px" alt="" />
                            </p>
                            <h2 className="text-white">CarHouse</h2>
                        </div>
                        <div className="input-group mb-3">
                            <input id="msg-id" type="text" className="form-control" placeholder="Write your Complain" aria-label="Write your Complain" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={() => sendMsg()}>Send</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 ps-5 text-center">
                        <h4 className="text-white text-center mb-2">Contact Us</h4>
                        <div className="address text-white">
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{home}</span> <span> Cox Bazar, CTG, Bangladesh</span></div>
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{phone}</span> <span> 01565649785, 018568595321</span></div>
                            <div className="d-flex align-items-center justify-content-center"><span className="customized-text-color fs-3 me-2">{email}</span> <span> carhouse@gmail.com</span></div>
                        </div>
                        <hr className="bg-light" />
                        <div className="useFullLinks text-center">
                            <a href="https://www.facebook.com/carhouse" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fab fa-2x fa-facebook-square"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=+8801521524556&text=Hello," target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fab fa-2x fa-whatsapp-square"></i></a>
                            <a href="mailto:carhouse@gmail.com" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fas fa-2x fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Footer;