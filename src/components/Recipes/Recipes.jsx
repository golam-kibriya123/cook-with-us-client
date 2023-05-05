import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const data = useLoaderData();
    const { recipes, image_url, name } = data;

    console.log(recipes)
    return (
        <div>
            <div className='flex items-center h-72'>

                <img src={image_url} alt="" className='h-52 w-52 rounded-full' />


                <h1 className='text-start text-2xl font-bold ms-5'> {name}</h1>



            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-3'>
                {recipes.map(d => <div className="h-48 flex bg-gray-100 text-[#6ebe3b] shadow-xl border 
border-[#6dbe3b3f]">
                    <div className="w-[40%]  h-full  ">
                        <img src={d.photo_url} alt="" className='w-full h-full' />
                    </div>
                    <div className="relative w-[60%] pt-5">
                        <h2 className='font-bold  bg-[#6ebf3bc7] text-white p-1'>{d.name} </h2>
                        <p className='p-1 text-[#6ebe3b]'>Description </p>
                        <p className='ps-1 text-sm'> {d.cooking_method.slice(0,70)} . . . . .</p>
                        <Link to={'/recipesDetails'} className='bg-[#6ebf3bc7] hover:bg-white text-gray-200 hover:text-[#6ebe3b] border border-gray-200   px-2  font-semibold h-9 absolute bottom-0 right-0 '>Details</Link>
                    </div>
                </div>)}




            </div>

        </div>
    );
};

export default Recipes;