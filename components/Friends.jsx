import React from 'react';
import hero from '../assets/images/main.jpg';
import friend1 from '../assets/images/friend1.jpg';
import friend2 from '../assets/images/friend2.jpg';
import friend3 from '../assets/images/friend3.jpg';
import friend4 from '../assets/images/friend4.jpg';
import friend5 from '../assets/images/friend5.jpg';
import friend6 from '../assets/images/friend6.jpg';
import friend7 from '../assets/images/friend7.jpg';
import friend8 from '../assets/images/friend8.jpg';
import friend9 from '../assets/images/friend9.jpg';
import Content from "./Content.jsx";


const Friends = () => {
    return (
            <main className="clearfix">
                <section className="float-start w-25 me-3">
                    <img className="w-100" src={hero} title="Hero" alt="Hero"/>
                </section>
                <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
                    <h2 className="text-center">Dream team</h2>
                    {[friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9].map((img, index) => (
                        <img
                            key={index}
                            className={`col-sm-4 p-1 
                            ${index === 6 ? 'bottomLeft' : index === 8 ? 'bottomRight' : ''
                            }`}
                            src={img}
                            title="Friend"
                            alt="Friend"
                        />
                    ))}
                </section>
                <Content/>
            </main>
    );
};

export default Friends;