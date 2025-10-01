import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playerPromise = fetchPlayers();
function App() {
  const [availableBalance, setAvailableBalance] = useState(500000)
  const [toggle, setToggle] = useState(true)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])


  const removePlayer = (player) => {

    const price = parseInt(player.price.replace('USD', '').replace(',', ''))

    const filteredData = purchasedPlayers.filter(plyr => plyr.name !== player.name)

    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + price)

  }


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='mx-auto max-w-[1200px] flex justify-between items-center'>
        <h1 className='font-bold text-sm md:text-2xl ml-2'>{toggle ? 'Available Players' : `Selected Players (${purchasedPlayers.length}/6)`}</h1>
        <div className='flex text-sm md:text-xl mr-2'>
          <button onClick={() => setToggle(true)} className={`border border-gray-300 rounded-l-2xl py-2 px-4 border-r-0 font-bold cursor-pointer ${toggle === true && 'bg-[#e7fe29]'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`border border-gray-300 rounded-r-2xl py-2 px-4 border-l-0 font-bold cursor-pointer ${toggle === true || 'bg-[#e7fe29]'}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
            <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers setToggle={setToggle} removePlayer={removePlayer} playerPromise={playerPromise} purchasedPlayers={purchasedPlayers}></SelectedPlayers>

      }


      <ToastContainer></ToastContainer>



    </>
  )
}

export default App
