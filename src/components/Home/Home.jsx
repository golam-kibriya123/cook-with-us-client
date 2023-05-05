
import React from "react";
import SliderOne from '../Sliders/SliderOne/SliderOne';
import Country from '../Country/Country';
import Chefs from '../Chefs/Chefs';



const Home = () => {
    return (
        <div className='w-full '>

            <SliderOne></SliderOne>
            <Chefs></Chefs>

            <Country></Country>

        </div>
    );
};

export default Home;