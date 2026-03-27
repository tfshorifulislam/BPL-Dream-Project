import React from 'react';
import bgImg from '../../assets/newsletter bg.png'
const NewsLetter = () => {
    return (
        <div className='w-335 mx-auto absolute -top-50 right-50'>
            <div className='bg-[#ffffff15] border-2 border-white rounded-3xl p-6'>

                <div className='bg-white py-22 px-59 rounded-2xl' style={{ backgroundImage: `url(${bgImg})` }}>

                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center font-bold text-[#131313] text-3xl mb-4'>Subscribe to our Newsletter</h2>
                        <p className='text-center text-xl font-medium text-[#13131370] mb-6'>Get the latest updates and news right in your inbox!</p>
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-[#04663a] text-white ">Subscribe</button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;