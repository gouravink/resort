import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/banner';

const Rooms = () => {
    return (
        <Hero className="roomsHero">
            <Banner title="luxurious rooms" subtitle="deluxe room satrting at 2000">
                <Link to="/room" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
    );
}


export default Rooms