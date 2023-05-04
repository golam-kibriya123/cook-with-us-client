import { AiFillLike } from 'react-icons/ai';
import { GiCampCookingPot } from 'react-icons/gi';
import React from "react";
import SliderOne from '../Sliders/SliderOne/SliderOne';
import Country from '../Country/Country';



const Home = () => {
    return (
        <div className='w-full '>

            <SliderOne></SliderOne>

            {/*img1=> https://img.freepik.com/free-photo/vegetable-kebab-table_140725-10051.jpg?w=740&t=st=1683187263~exp=1683187863~hmac=1afa8f5eb6097a0c9b6db4c6800aed4b11b4b8a728762a13546ed7a1aa66946d
            img2=> https://img.freepik.com/free-photo/top-view-leaf-dolma-delicious-eastern-meat-meal-rolled-inside-green-leaves-with-seasonings-sliced-vegetables-blue-desk-meat-dinner-dish-health-meal_140725-64860.jpg?w=900&t=st=1683187305~exp=1683187905~hmac=622de2fc7ee2b91c82d98b744078af704fa08399fc04d28390d03cfa475980b2
            img=> https://img.freepik.com/free-photo/whole-chicken-grill-served-with-rice-garnish-white-plate_114579-873.jpg?w=826&t=st=1683187168~exp=1683187768~hmac=3ee1feab5b3b3a627f240100317b9c80bf0cd450fe3dcf838c126388fc4c7579
            img=>4 https://img.freepik.com/free-photo/side-close-up-view-spices-pilaf-board-bowls-colorful-spices_140725-74084.jpg?w=900&t=st=1683187205~exp=1683187805~hmac=cc9159c41685c0ccc3cf882cffd154df5fc9834130f6c0c3d69bdeaa1121505e
            img5=> https://img.freepik.com/free-photo/top-view-kebab-mix-with-bulgur-onion-pita-bread-with-vegetables-stand_141793-13137.jpg?w=900&t=st=1683187365~exp=1683187965~hmac=2fda278ee1c854cdcc271d4f05cd68b11d26907bae924342d0772481f44d4dcb */}

            <div className="chefs mt-40">
                <div className='text-center'>
                    <h2 className='border-b-2 border-[#6ebe3b] mb-10 text-xl md:text-2xl uppercase font-semibold md:font-bold inline-block '> they all are <span className='text-[#6ebe3b] relative'>recipe
                        <div className='h-[1.8px] w-full bg-black inline-block absolute -bottom-[4.5px] left-0 '></div> </span> makers</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 '>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  border border-[#6dbe3b] 
            text-[#6dbe3b] mx-auto">
                        <figure><img src="https://images.prestigeonline.com/wp-content/uploads/sites/3/2021/01/06162636/Marimoto.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Masaharu Morimoto </h2>
                            <p>10 years of experience</p>
                            <p className='relative inline '>10 Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                            <p className='relative inline '>Likes 1000 <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Country></Country>

        </div>
    );
};

export default Home;