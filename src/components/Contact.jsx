import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url, getDatePlus30Days} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);


    useEffect(() => {
        const getPlanets = async () => {
            const now = new Date();
            const loaded = localStorage.getItem('planets');
            console.log('Planets were loaded')
            let parsedPlanets;
            if (loaded) {
                parsedPlanets = JSON.parse(loaded);
                if (now.getTime() < parsedPlanets.expiry) {
                    setPlanets(parsedPlanets.planets);
                    return;
                } else {
                    console.log('planets expired');
                    localStorage.removeItem('planets');
                }
            }

            try {
                const res = await fetch(`${base_url}/v1/planets`);
                const data = await res.json();
                const planetNames = data.map(item => item.name);
                setPlanets(planetNames);
                localStorage.setItem(
                    'planets',
                    JSON.stringify({
                        planets: planetNames,
                        expiry: getDatePlus30Days()
                    })
                );
            } catch (err) {
                console.error('Failed to fetch planets:', err);
            }
        };
        getPlanets().then((data) => {console.log('123')});
    }, []);

    return (
        <form className="container" onSubmit={e => {
            e.preventDefault();
        }}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label>Planet
                <select name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.."></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Contact;
