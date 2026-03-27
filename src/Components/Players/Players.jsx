import React, { use, useState } from 'react';
import AvailablePlayers from '../Card/AvailablePlayers';
import SelectedPlayers from '../Card/SelectedPlayers';


const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise)
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [selectedType, setSelectedType] = useState('Available')
    // console.log(selectedType)
    return (
        <div>
            <div className='flex justify-between mt-20'>
                {selectedType === 'Available' ?
                    <h2 className='font-bold text-3xl text-[#131313]'>Available Players</h2>
                    : <h2 className='font-bold text-3xl text-[#131313]'> Selected Players ({selectedPlayers.length} / {players.length})</h2>
                }
                <div>
                    <button
                        onClick={() => setSelectedType('Available')}
                        className={`btn ${selectedType === 'Available' ? 'bg-[#04663a] text-white' : 'btn'}  font-bold rounded-r-none border-none rounded-l-xl text-black`}>Available</button>
                    <button
                        onClick={() => setSelectedType('Selected')}
                        className={`btn ${selectedType === 'Selected' ? 'bg-[#04663a] text-white' : 'btn'}  font-bold rounded-l-none border-none rounded-r-xl text-black`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {
                selectedType === 'Available' ?
                    <AvailablePlayers playersPromise={playersPromise} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                    : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}/>
            }
        </div>
    );
};

export default Players;