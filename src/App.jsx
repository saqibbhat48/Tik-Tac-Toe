import { useState, useEffect } from "react";
import StartGame from "./components/StartGame";
import Board from "./components/Board";
import WinGame from "./components/WinGame";
import Navbar from "./components/Navbar";
import Osound from './assets/O.mp3'
import Xsound from './assets/X.mp3'
import Winsound from './assets/win.mp3'
import Drawsound from './assets/draw.mp3'

function App() {
  const [tog, setTog] = useState(false);
  const [arr, setArr] = useState(Array(9).fill(''))
  const [win, setWin] = useState(true)
  const [winner, setWinner] = useState('')
  const [turn, setTurn] = useState(true)
  const [player, setPlayer] = useState('O')
  const [newG, setNewG] = useState(true)
  const [draw, setDraw] = useState(false)

  function winSound(){
    const audio = new Audio(Winsound);
      audio.play();
  }

  function turnO(e){
    setPlayer('O')
    setTurn(true)
    setTog(false)
  }

  function turnX(e){
    setTurn(false)
    setPlayer('X')
    setTog(true)
  }

  function toggle(e) {
    const newValue = tog ? 'X' : 'O';
    const index = parseInt(e.target.value);
    
    const newArr = [...arr];
    newArr[index] = newValue;
    setArr(newArr)

    setTog(!tog);
    if (tog) {
      e.target.innerText = 'X';
      e.target.style.backgroundColor = '#ED9455'
      const audio = new Audio(Xsound);
      audio.play();
      setPlayer('O')
    } else {
      e.target.innerText = 'O';
      e.target.style.backgroundColor = '#41B06E'
      const audio = new Audio(Osound);
      audio.play();
      setPlayer('X')
    }
    e.target.disabled = true;
    
  }

  function checkWin(){
    if(arr[0]===arr[1] && arr[1]===arr[2] && arr[2] !== ''){
      setWin(!win)
      setWinner(arr[0])
      winSound()
    }
    else if(arr[3]===arr[4] && arr[4]===arr[5] && arr[5] !== ''){
      setWin(!win)
      setWinner(arr[3])
      winSound()
    }
    else if(arr[6]===arr[7] && arr[7]===arr[8] && arr[8] !== ''){
      setWin(!win)
      setWinner(arr[6])
      winSound()
    }
    else if(arr[0]===arr[3] && arr[3]===arr[6] && arr[6] !== ''){
      setWin(!win)
      setWinner(arr[0])
      winSound()
    }
    else if(arr[1]===arr[4] && arr[4]===arr[7] && arr[7] !== ''){
      setWin(!win)
      setWinner(arr[1])
      winSound()
    }
    else if(arr[2]===arr[5] && arr[5]===arr[8] && arr[8] !== ''){
      setWin(!win)
      setWinner(arr[2])
      winSound()
    }
    else if(arr[0]===arr[4] && arr[4]===arr[8] && arr[8] !== ''){
      setWin(!win)
      setWinner(arr[0])
      winSound()
    }
    else if(arr[2]===arr[4] && arr[4]===arr[6] && arr[6] !== ''){
      setWin(!win)
      setWinner(arr[2])
      winSound()
    }
    else if (arr.every(cell => cell !== '')) {
      const audio = new Audio(Drawsound);
      audio.play();
      setDraw(true)
      setWin(!win);
      setWinner('Draw');
    }
    
  }

  useEffect(() => {
    checkWin()
  }, [tog])

  function newGame(){
    setDraw(false)
    setWin(!win)
    setArr(Array(9).fill(''))
    setTog(tog?true:false)
  }

  function quitGame(){
    setDraw(false)
    setNewG(true)
    setWin(true)
    setArr(Array(9).fill(''))
    setTog(false)
    setPlayer('O')
    setTurn(true)
  }
  
  
  return (
    <>
    <Navbar/>
    {newG ? <StartGame turnO={turnO} turnX={turnX} setN={setNewG} n={newG} T={turn} p={player} />
    :
    <div>
      {win ? <Board onClick1={toggle} onClick2={quitGame} p={player} /> : <WinGame onClick={newGame} onClick2={quitGame} w={winner} d={draw} />}
    </div>
    }
    </>
  );
}

export default App;
