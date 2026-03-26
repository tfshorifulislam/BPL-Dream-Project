import React from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(selectedPlayers)
    const handleDeleteClicked = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectDeletePlayers => selectDeletePlayers.PlayerName !== player.PlayerName)
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.price)
        toast.warn(`Remove ${player.PlayerName}`)
    }
    return (
        <div>
            <div className='mt-8 space-y-6'>
                {
                    selectedPlayers.map((player, i) => {
                        return (
                            <div key={i}
                                className='flex justify-between items-center p-3 md:p-6 border border-[#13131310] shadow-xl rounded-2xl'>
                                <div className='flex gap-6 flex-col md:flex-row'>
                                    <img className='w-25 h-18.75 rounded-lg' src={player.playerImg} alt={player.PlayerName} />
                                    <div>
                                        <h2 className='font-semibold text-[#131313] text-2xl'>{player.PlayerName}</h2>
                                        <p>{player.playerType}</p>
                                    </div>
                                </div>
                                <MdDelete className='btn text-[#F14749]' onClick={() => handleDeleteClicked(player)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;