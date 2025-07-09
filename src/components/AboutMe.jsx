import React, {useEffect, useState} from 'react';
import {aboutMeItems, base_url} from "../utils/constants.js";
import Spiner from "./Spiner.jsx";
import Hero from "./Hero.jsx";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setAboutMe(data));
        return () => console.log('AboutMe was unmounted')
    }, [])
    if (aboutMe) {
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center p-5 ">
                <div className="text-center fs-2 m-5 border rounded-4 p-4">
                    <Hero/>
                    {aboutMeItems.map((key) => (
                        <p key={key}>{key}: {aboutMe[key]}</p>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <Spiner/>
        )
    }
};

export default AboutMe;