import React from 'react'

const ServiceItem = ({icon, title, info}) =>{
    return(
        <article className = "service">
            <span>{icon}</span>
            <h6>{title}</h6>
            <p>{info}</p>
        </article>
    );
}

export default ServiceItem