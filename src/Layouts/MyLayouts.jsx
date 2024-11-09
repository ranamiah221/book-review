import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const MyLayouts = () => {
    const navigation=useNavigate();
    return (
        <div className='max-w-7xl mx-auto'>
             
              <div className='h-16'>
              <Navbar></Navbar>
              </div>
                {
                    navigation.state ==='loading ' ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>
                }
                
            
        </div>
    );
};

export default MyLayouts;