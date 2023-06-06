import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const LayOut = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Home />
        </div>
    );
};

export default LayOut;