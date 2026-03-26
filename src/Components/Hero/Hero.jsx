import React from 'react';
import HeroImg from '../../assets/bg-shadow.png'
import CricketImg from '../../assets/banner-main.png'
const Hero = () => {
    return (
        <div className='h-136.25 w-full bg-[#131313] rounded-3xl border-[#13131310] bg-cover bg-no-repeat flex justify-center items-center'
            style={{ backgroundImage: `url(${HeroImg})` }}>

            <div className="hero-container flex justify-center items-center flex-col space-y-6">
                <div>
                    <img src={CricketImg} alt="" />
                </div>
                <div>
                    <h1 className='text-white text-4xl font-bold leading-14 text-center'>
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className='text-white font-medium text-2xl text-center opacity-70'>
                        Beyond Boundaries Beyond Limits
                    </p>
                </div>
                <button className='bg-[#ffffff05] border-[#E7FE29] border rounded-2xl cursor-pointer'>

                    <div className='text-[#131313] font-bold bg-[#E7FE29] rounded-xl py-3.5 px-5  shadow-[4px_4px_20px_0_rgba(19, 19, 19, 1)] m-2'>
                        Claim Free Credit
                    </div>
                    
                </button>
            </div>

        </div>
    );
};

export default Hero;