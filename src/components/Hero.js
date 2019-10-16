import React from 'react'

const Hero = ({children, className}) => {
    return (
        <header className = {className}>
            {children}
        </header>
    );
}

Hero.defaultProps = {
    className: "defaultHero",
  };


export default Hero;

