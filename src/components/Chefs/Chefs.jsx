import React, { useEffect, useState, } from 'react';
import SingleChef from '../singleChef/singleChef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://cook-with-us-server-golam-kibriya123.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);
    console.log(chefs);

    return (
        <div>

            {chefs.map(chef => <SingleChef key={chef.id}></SingleChef>)}

        </div>
    );
};

export default Chefs;