import './App.css'
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
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='mx-auto max-w-[1200px] flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='flex'>
          <button onClick={() => setToggle(true)} className={`border border-gray-300 rounded-l-2xl py-2 px-4 border-r-0 font-bold ${toggle === true && 'bg-[#e7fe29]'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`border border-gray-300 rounded-r-2xl py-2 px-4 border-l-0 font-bold ${toggle === true || 'bg-[#e7fe29]'}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
            <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers></SelectedPlayers>

      }



    </>
  )
}

export default App
