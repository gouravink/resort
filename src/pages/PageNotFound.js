import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/banner';

const PageNotFound = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page not found">
                <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
            </Banner>
        </Hero>
    );
}


export default PageNotFound