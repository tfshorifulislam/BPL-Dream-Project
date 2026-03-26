import React, { useState } from 'react';
import AvailablePlayers from '../Card/AvailablePlayers';
import SelectedPlayers from '../Card/SelectedPlayers';


const Players = ({ playersPromise, setCoin, coin}) => {


    const [selectedType, setSelectedType] = useState('Available')
    // console.log(selectedType)
    return (
        <div>
            <div className='flex justify-between mt-20'>
                <h2 className='font-bold text-3xl text-[#131313]'>{selectedType === 'Available' ? 'Available Players' : 'Selected Players'}</h2>
                <div>
                    <button
                        onClick={() => setSelectedType('Available')}
                        className={`btn ${selectedType === 'Available' ? 'bg-[#04663a]' : 'btn'}  font-bold rounded-r-none border-none rounded-l-xl text-black`}>Available</button>
                    <button
                        onClick={() => setSelectedType('Selected')}
                        className={`btn ${selectedType === 'Selected' ? 'bg-[#04663a]' : 'btn'}  font-bold rounded-l-none border-none rounded-r-xl text-black`}>Selected (0)</button>
                </div>
            </div>
            {
                selectedType === 'Available' ? <AvailablePlayers playersPromise={playersPromise} coin={coin} setCoin={setCoin}/>: <SelectedPlayers />
            }
        </div>
    );
};

export default Players;