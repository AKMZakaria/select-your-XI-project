// import React, { useState } from 'react';
import userImg from '../../assets/Group.png'
import flagImg from '../../assets/report 1.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {
    
    // const [isSelected, setIsSelected] = useState(false)


    const handleSelected = (player) => {



        const price = parseInt(player.price.replace('USD', '').replace(',', ''))

        if (availableBalance - price < 0) {
            toast('Not Enough Balance');
            return;
        }

        if (purchasedPlayers.length === 6) {
            toast('Maximum Player Selected!!')
            return
        }

        setAvailableBalance(availableBalance - price);
        // setIsSelected(true);
        
        
        setPurchasedPlayers([...purchasedPlayers, player])
        toast('Player Purchased!!')
    };



    const isSelected = purchasedPlayers.some(p => p.name === player.name);

    return (
            <div key={player.rating} className="card shadow-lg p-4 ">
                <figure>
                    <img className='w-full h-[300px] object-cover'
                        src={player.img}
                        alt="Players" />
                </figure>
                <div className=" mt-4 bg-white">
                    <div className='flex gap-1 mb-2'>
                        <img src={userImg} alt="" /> <h2 className="card-title">{player.name}</h2>
                    </div>
                    <div className='flex justify-between border-b-1 border-gray-200 pb-4'>
                        <div className='flex gap-1 items-center'>
                            <img className='w-[20px] h-[20px]' src={flagImg} alt="" /> <span>{player.country}</span>
                        </div>
                        <button className='btn bg-[#f3f3f3] text-black border-0 shadow'>{player.role}</button>
                    </div>
                    <div className='flex justify-between font-bold mb-2'>
                        <span>Rating</span>
                        <span className='mr-4'>{player.rating}</span>
                    </div>
                    <div className='flex justify-between '>
                        <span className='font-bold'>{player.battingStyle}</span>
                        <span className='mr-4'>{player.bowlingStyle}</span>
                    </div>
                    <div className="card-actions mt-1 justify-between items-center">
                        <p className='font-bold'>Price: ${player.price}</p>

                        <button disabled={isSelected} onClick={() => handleSelected(player)}
                            className={`btn bg-white  border-0 shadow ${isSelected ? 'text-gray-500' : 'text-black'}`}>{isSelected ? 'Selected' : ' Choose Player'} </button>

                    </div>
                </div>
            </div>
    );
};

export default PlayerCard;