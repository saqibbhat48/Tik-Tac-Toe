import React from 'react'

const StartGame = ({turnO, turnX, setN, n, T, p}) => {
  return (
    <div>
      <div className="mt-24 bg-slate-900 p-4 text-white w-max mx-auto">
      <h1 className="text-center font-bold text-2xl">Tic-Tac-Toe Game</h1>
      <div className="my-4">
        <div className="bg-slate-950 flex justify-between p-2 rounded-md mx-auto w-28 text-xl font-semibold">
          <p className="py-2 px-4 cursor-pointer" style={{backgroundColor:T?'purple':'#192632'}} onClick={turnO}>O</p>
          <p className="py-2 px-4 cursor-pointer" style={{backgroundColor:T?'#192632':'purple'}} onClick={turnX}>X</p>
        </div>
        <h2 className="text-center mt-2 text-purple-200 font-semibold">Player <span className="text-white text-xl font-bold">{p}</span> will play first</h2>
      </div>
      <div className="flex">
      <button onClick={()=>setN(!n)} className="bg-green-600 py-1 px-2 text-white rounded-md my-4 mx-auto hover:bg-green-700 duration-300 ease-linear">Start New Game</button>
      </div>
    </div>
    </div>
  )
}

export default StartGame
