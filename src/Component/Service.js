import './Style.css';
import React from 'react';
import Ourservices from "./Services/Ourservices";
import Offer from "./Home/Offer";
import Discover from "./Home/Discover";
import Advantage from './Services/Advantage';
import Counter from './Home/Counter';

function Service() {
    return (
        <>
            <Ourservices />
            <Offer />
<Counter />
            <Advantage />

        </>
    );
}
export default Service;