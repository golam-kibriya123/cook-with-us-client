import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='font-serif max-w-full'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;