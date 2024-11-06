import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MyLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayouts;