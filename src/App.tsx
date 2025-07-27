import { useState } from 'react';
import './App.css'
import { Background } from './components/Background'
import { FlappyBird } from './components/FlappyBird'
import { Start } from './components/StartMenu'; 
import { Poles } from './components/Poles';
const initialPos = 300;
const topPoleHeight = 300;
const gap = 250;
function App() {
  const [birdPos, setBirdPos] = useState(initialPos);
  const [isStart,setStart] = useState(false);
  const [newHeight, setNewHeight] = useState(topPoleHeight);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
            <Start isStart={isStart} setStart={setStart}/>
            <Background birdPos={birdPos} setBirdPos={setBirdPos} />
            <FlappyBird isStart={isStart} birdPos={birdPos} setBirdPos={setBirdPos}  />
            <Poles rotation={180} height ={topPoleHeight} top={4} newHeight={newHeight} setNewHeight={setNewHeight}/>           
            <Poles rotation={0} height={(900-newHeight-gap)} top={(newHeight+gap)}/>
        </div>
  )
}

export default App
