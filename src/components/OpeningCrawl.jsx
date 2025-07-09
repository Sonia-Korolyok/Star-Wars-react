import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import Spiner from "./Spiner.jsx";


const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState('');

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
        return () => console.log('Opening Crawl was unmounted');
    }, [])

    if (openingCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (
            <Spiner/>
        )
    }


};


export default OpeningCrawl;
