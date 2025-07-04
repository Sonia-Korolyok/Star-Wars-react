import React from "react";
import {dreamTeam} from "../utils/constants.js";


const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            {dreamTeam.map((img, index) => (
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
    );
};


export default DreamTeam;
