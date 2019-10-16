import React, { useState } from 'react'
import Tiles from '../components/title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import ServiceItem from '../components/services-item';

const Services = (props) => {
    return (
        <section className="services">
            <Tiles title='Services' />
            <div></div>
            <div className="services-center">
                <ServiceItem icon={<FaCocktail />}
                    title="free cocktail"
                    info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <ServiceItem icon={<FaHiking />}
                    title="free cocktail"
                    info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <ServiceItem icon={<FaShuttleVan />}
                    title="free cocktail"
                    info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <ServiceItem icon={<FaBeer />}
                    title="free cocktail"
                    info="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
            </div>
        </section>
    );

}

export default Services;