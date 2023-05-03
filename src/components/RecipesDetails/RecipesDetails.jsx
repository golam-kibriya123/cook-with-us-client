import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
const RecipesDetails = () => {
    return (
        <div>
            <div>
                <div className=' w-[90%] bg-[url(../../../public/o.jpg)] bg-no-repeat bg-cover bg-opacity-5 text-white p-8 m-8 mx-auto rounded-lg relative'>
                    <div className='flex flex-col md:flex-row gap-5 mb-5'>

                        <div className="directions w-[95%] md:w-[40%] bg-[#000000]  bg-opacity-50 rounded-lg p-2">
                            <div className='mb-2'>
                                <p className='uppercase font-bold border-b-4 pb-1 border-[#6ebe3b]  inline'>ingredients</p>
                            </div>
                            Kosher salt or coarse sea salt, for glass
                            2 lime wedges
                            2 to 3 strawberries, hulled, halved, plus more for serving
                            1 tsp. agave syrup
                            2 oz. mezcal
                            1 oz. Cointreau
                            1/2 oz. fresh lime juice
                            Ice
                        </div>

                        <div className="directions w-[95%] md:w-[60%] bg-[#000000]  bg-opacity-50 rounded-lg p-2">
                            <div className='mb-2'>
                                <p className='uppercase font-bold border-b-4 pb-1 border-[#6ebe3b]  inline'>directions</p>
                            </div>
                            Step 1
                            Place salt on a shallow plate. Rub a lime wedge around the rim of a rocks glass, then dip into salt.
                            Step 2
                            In glass, muddle 2 to 3 strawberries with agave. Add mezcal, cointreau, and lime juice. Fill glass with ice and stir to combine.
                            Step 3
                            Garnish with a strawberry and lime wedge.
                        </div>
                    </div>
                    <HiArrowLeft className='absolute bottom-1  text-3xl p-1 text-[#6ebe3b] bg-[#000000]  bg-opacity-50 rounded-md cursor-pointer border hover:border-[#6ebe3b] hover:bg-opacity-0' />
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;