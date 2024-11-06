import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MyLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayouts;