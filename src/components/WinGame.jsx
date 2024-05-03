import React from 'react'

const WinGame = ({onClick, onClick2, w, d}) => {
  return (
    <div>
      <div className="mt-24 mx-auto w-max bg-slate-900 p-2 ">
        {d ? <h1 className="text-center text-white font-bold text-2xl  ">Game {w}</h1> :
        <div>
        <h1 className="text-center text-white font-bold text-2xl  ">Congratulations</h1>
        <h1 className="text-center text-white font-bold text-2xl mb-4">Player {w} Won</h1>
        </div>}
        <div className="flex gap-4 p-2 ">
        <button onClick={onClick} className="bg-green-600 py-1 px-2 text-white rounded-md  hover:bg-green-700 duration-300 ease-linear">New Game</button>
        <button onClick={onClick2} className="bg-red-600 py-1 px-2 text-white rounded-md hover:bg-red-700 duration-300 ease-linear">Quite Game</button>
        </div>
      </div>
    </div>
  )
}

export default WinGame
