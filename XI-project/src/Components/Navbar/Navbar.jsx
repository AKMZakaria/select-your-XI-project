import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar currency symbol on gold coin - PNG.png';

import React from 'react';

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl"><img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
                </div>
                <div className="flex items-center">
                    <span className='mr-1'>{availableBalance}</span>
                    <span className='mr-2'>Coin</span>
                    <img className='w-5' src={dollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

