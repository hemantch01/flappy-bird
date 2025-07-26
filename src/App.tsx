import { useState } from 'react';
import './App.css'
import { Background } from './components/Background'
import { FlappyBird } from './components/FlappyBird'
import { Start } from './components/StartMenu';
const initialPos = 300;
function App() {
  const [birdPos, setBirdPos] = useState(initialPos);
  const [isStart,setStart] = useState(false);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
            <Start isStart={isStart} setStart={setStart}/>
            <Background birdPos={birdPos} setBirdPos={setBirdPos} />
            <FlappyBird isStart={isStart} birdPos={birdPos} setBirdPos={setBirdPos}  />
        </div>
  )
}

export default App
