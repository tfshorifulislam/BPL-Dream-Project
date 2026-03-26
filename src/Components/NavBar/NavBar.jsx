import React from 'react';
import Logo from '../../assets/logo.png'
import NavItems from './NavItems';
import Coin  from '../../assets/dollar_1.png'

const NavBar = () => {
    return (
        <div className='mt-12 flex justify-between items-center mb-6'>
            <div>
                <img src={Logo} alt="" />
            </div>

            <div className='flex justify-between items-center gap-12'>
                <NavItems />
                <div className='flex justify-between items-center gap-2.5'>
                    <span className='text-xl text-[#131313] font-semibold'>0 Coin</span>
                    <span><img className='w-5 h-5' src={Coin} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;