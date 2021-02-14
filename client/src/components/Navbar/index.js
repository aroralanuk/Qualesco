import React from 'react';
import './style.css';

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
            <a href="/">Qualesco</a>
        </div>
        <div className='navbar__item'>
            <a href="/explore">Explore</a>
        </div>
        <div className='navbar__item'>
            <a href="/dashboard">Dashboard</a>
        </div>      
    </header>
);

export default NavBar;