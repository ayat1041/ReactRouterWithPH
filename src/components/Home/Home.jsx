import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>Feels like home</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;<h3>Feels like home</h3>