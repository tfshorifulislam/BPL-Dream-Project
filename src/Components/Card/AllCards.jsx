import React, { useState } from 'react';

import { FaUser } from 'react-icons/fa';
import { FaFlag } from "react-icons/fa6";
const AllCards = ({ player }) => {
    const [isTrue, setIsTrue] = useState(false)

    return (
        <div>
            <div key={player.PlayerName} className="p-4 rounded-2xl border border-[#13131310] items-center shadow-lg">
                <div>
                    <img className='w-full h-60 rounded-2xl mb-6'
                        src={player.playerImg}
                        alt={player.PlayerName}
                    />
                </div>

                <div className="">
                    <h2
                        className="flex items-center text-xl text-[#131313] font-semibold gap-4">
                        <FaUser />
                        {player.PlayerName}
                    </h2>
                    <div
                        className='flex justify-between items-center my-4'>
                        <p
                            className='flex items-center text-[#131313] opacity-50'>
                            <FaFlag className='mr-4' />
                            {player.playerCountry}
                        </p>
                        <p
                            className='text-[#131313]'>
                            {player.playerType}
                        </p>
                    </div>
                    <div
                        className="divider">
                    </div>
                    <div>
                        <h2 className='text-[#131313] font-bold'>Rating</h2>
                        <div className='flex justify-between mt-4'>
                            <p className='font-semibold text-[#131313] '>{player.ballingStyle}</p>
                            <p className='font-semibold text-[#131313] '>{player.batingStyle}</p>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <p
                                className='font-semibold text-[#price]'>Price:{player.price}
                            </p>
                            <button
                                disabled={isTrue? true : false}
                                onClick={() => setIsTrue(true)}
                                className='btn font-normal text-[#131313]'>
                                {isTrue ? 'Selected' : 'Choose Player'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCards;