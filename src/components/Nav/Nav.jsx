import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [count, setCount] = useState(true);
    const countHandler = () => {
        setCount(!count)
    };
    console.log(count)

    return (
        <div className='flex flex-col md:flex-row justify-between  p-4 '>
            <div className="nav-logo">
                <h1 className='font-extrabold text-2xl md:text-3xl lg:text-5xl  text-white ps-1'>Cook With <span className='text-[#6ebe3b] p-1'>Us</span></h1>
            </div>

            <div className='flex flex-row justify-between text-center relative mt-4 md:mt-0 '>
                <div className='h-9 w-9 bg-[#6ebe3b] rounded-full'> </div>
                <div className={`md:hidden text-[#6ebe3b]`}>
                    <AiOutlineMenu onClick={() => countHandler()} className={`text-4xl  h-9 ${count || 'hidden'}`} />
                    <AiOutlineClose onClick={() => countHandler()} className={`text-4xl  h-9 ${count && 'hidden'}`} />
                </div>

                <div className={`nav-links flex flex-row   absolute md:static ${count ? '-top-56' : 'top-20 -left-2'}`}>
                    <Link to="/home" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9'>Home </Link>
                    <Link to="/recipes" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9'> Recipes </Link>
                    <Link to="/chefs" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9'>Chefs </Link>
                    <Link to="/blog" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9'>Blog </Link>
                </div>
                <div className="login-method ">
                    <button className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2  mx-2 font-semibold h-9'>Logout</button>

                </div>
            </div>
        </div >
    );
};

export default Nav
    ;