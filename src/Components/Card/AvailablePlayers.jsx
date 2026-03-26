import React, { use } from 'react';
import AllCards from './AllCards';
const AvailablePlayers = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto mt-14'>
                {
                    players.map(player => <AllCards key={player.PlayerName} player={player} coin={coin} setCoin={setCoin} />)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;