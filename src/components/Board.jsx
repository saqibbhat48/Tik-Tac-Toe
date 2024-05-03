import React from 'react'

const Board = ({onClick, onClick2, p}) => {
  return (
    <div>
      <div className="mt-16 w-max mx-auto"> <h3 className="mb-4 text-center font-bold text-2xl">Player turn: {p}</h3>
          <div className="board bg-slate-900 p-1 rounded-md">
        <div className="row1 flex gap-2 m-2">
          <button value={0} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={1} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={2} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
        </div>
        <div className="row2 flex gap-2 m-2">
          <button value={3} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={4} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={5} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
        </div>
        <div className="row3 flex gap-2 m-2">
          <button value={6} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={7} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
          <button value={8} onClick={onClick} className="h-24 w-24 bg-slate-200 rounded-md hover:scale-105 duration-300 ease-linear flex justify-center items-center text-6xl font-semibold cursor-pointer active:bg-slate-500 text-white"></button>
        </div>
        </div>
        <button onClick={onClick2} className="bg-slate-900 py-1 px-2 text-white rounded-md my-8 ml-28 hover:bg-slate-950 duration-300 ease-linear">Quite Game</button>
      </div>
    </div>
  )
}

export default Board
