import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SingleHomeProduct = (props) => {
    const { _id, name, img, description, price } = props.singleHomeProduct;
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="col">
            <div className="card h-100 customised-card">
                <img src={img || "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} className="card-img-top rounded rounded-3 card-img" height="250px" alt="..." />
                <div className="card-body px-3">
                    <h4 className="card-title text-dark">{name}</h4>
                    <p className="card-text text-muted">{description}</p>
                    <h6>Price : {dollar} {price}</h6>
                </div>
                <div className="card-footer text-center py-3">
                    <Link to={`/purchase/${_id}`}>
                        <Button variant="outline-success" >Purchases</Button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default SingleHomeProduct;