import PlayerSelected from "../PlayerSelected/PlayerSelected";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {

    const handleRemove = (player) => {
        removePlayer(player)

    }

    // console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>


            {

                purchasedPlayers.map(player => <PlayerSelected handleRemove={handleRemove} player={player} ></PlayerSelected>)

            }

            {purchasedPlayers.length !== 0 ?
                (
                    <button onClick={() => setToggle(true)} className='border border-gray-300 rounded-2xl py-1 px-6 md:py-2 md:px-10 font-bold bg-[#e7fe29] cursor-pointer ml-5'>Add More</button>
                ) :

                (
                    <div className="flex flex-col items-center justify-center h-[70vh] md:h-[100vh] text-xl md:text-5xl gap-4 md:gap-10 text-gray-600">
                        <i className="fa-regular fa-face-frown text-5xl md:text-7xl"></i>
                        <h1>You have not selected any player yet!!</h1>
                    </div>
                )

            }

        </div>
    );
};

export default SelectedPlayers;