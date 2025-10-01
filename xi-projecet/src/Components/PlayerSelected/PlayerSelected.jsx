import React from 'react';

const PlayerSelected = ({player, handleRemove}) => {
    
    return (
            <div key={player.rating} className='flex items-center justify-between m-5 border rounded-2xl border-gray-300 shadow p-3 md:p-5'>
                <div className='flex items-center gap-5'>
                    <img className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-cover rounded-2xl' src={player.img} alt="" />
                    <div className='flex flex-col gap-5 '>
                        <h3 className='font-bold md:text-xl'>{player.name}</h3>
                        <h3>{player.battingStyle}</h3>
                    </div>
                </div>

                <div onClick={() => handleRemove(player)} className='flex justify-between items-center'>


                    <i className="fa-solid fa-trash text-red-500 text-lg md:text-2xl cursor-pointer"></i>

                </div>
            </div>
    );
};

export default PlayerSelected;