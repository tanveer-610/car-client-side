import React from 'react';
import Banner from '../Banner/Banner';
import ChooseReason from '../ChooseReason/ChooseReason';
import CustomerReview from '../CustomerReview/CustomerReview';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div className="mt-5">
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ChooseReason></ChooseReason>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;