import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SingleCustomerReview = (props) => {
    const { customerName, email, comments, ratings } = props.singleReview;
    const ratingValue = parseInt(ratings);
    return (
        <div className="col  ">
            <div className="card h-100 p-4 text-center border border-success rounded rounded-3">
                <p>{customerName}</p>
                <p>{email}</p>
                <p>{comments}</p>
                <StarRatingComponent
                    name="star"
                    editing={false}
                    renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                    starCount={ratingValue}
                    value={ratingValue}
                    starColor={'green'}
                    className="d-flex justify-content-center"
                />
            </div>
        </div>
    );
};

export default SingleCustomerReview;