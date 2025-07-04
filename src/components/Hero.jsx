import hero from "../assets/Images/main.jpg";
import React from "react";


const OpeningCrawl = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={hero} title="Hero" alt="Hero"/>
        </section>
    );
};


export default OpeningCrawl;
