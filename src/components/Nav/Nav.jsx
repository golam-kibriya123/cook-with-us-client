import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='flex flex-row justify-between  p-4 '>
            <div className="nav-logo">
                <h1 className='font-extrabold text-2xl md:text-3xl lg:text-5xl  text-white ps-1'>Cook With <span className='text-[#6ebe3b] p-1'>Us</span></h1>
            </div>
            <div className='flex flex-row-reverse md:flex-row text-center'>
                <div className="nav-links flex flex-col md:flex-row ">
                    <Link to="/home" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'>Home </Link>
                    <Link to="/home" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'>Home </Link>
                    <Link to="/recipes" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'> Recipes </Link>
                    <Link to="/chefs" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'>Chefs </Link>
                    <Link to="/blog" className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'>Blog </Link>
                </div>
                <div className="login-method ">
                    <button className='bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2 py-1 mx-2 font-semibold h-9'>Logout</button>

                </div>
            </div>
        </div>
    );
};

export default Nav
;