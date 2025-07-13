import hero from "../assets/Images/main.jpg";
import React from "react";


const Hero = () => {
    return (
        <section className="float-left w-1/4 mr-4">
            <img className="w-full shadow-hero" src={hero} title="Hero" alt="Hero"/>
        </section>
    );
};


export default Hero;
