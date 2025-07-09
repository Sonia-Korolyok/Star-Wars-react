import React from 'react';
import Planets from "./Planets.jsx";

const Form = () => {
    return (
        <div className={'farGalaxy container text-center p-5'}>
            <form>
                <div className="form-group mb-4">
                    <label className="form-label">Your name</label>
                    <input type="text" className="form-control w-100" placeholder="Enter your name"/>
                </div>
                <div className="form-group mb-4">
                    <label className='form-label'>Your last name</label>
                    <input type='text' className='form-control w-100' placeholder={'Enter your lastname..'}/>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label">Message</label>
                    <textarea id="message" className="form-control w-100" placeholder="Enter your message"/>
                </div>
                <Planets/>
                <div>
                    <button className="btn btn-danger"
                            onClick={e => {e.preventDefault();
                        alert("Not yet implemented!")}}>Send</button>
                </div>
            </form>

        </div>
    );
};

export default Form;