import { useState } from 'react';
import './App.css'
import { Background } from './components/Background'
import { FlappyBird } from './components/FlappyBird'
import { Start } from './components/StartMenu'; 
import { Poles } from './components/Poles';
const initialPos = 300;
const topPoleHeight = 500;
export const baseHeight = topPoleHeight;
const gap = 250;
const rightPos = 550;
function App() {
  const [birdPos, setBirdPos] = useState(initialPos);
  const [isStart,setStart] = useState(false);
  const [newHeight, setNewHeight] = useState(topPoleHeight);
  const [newLoc, setNewLoc] = useState(rightPos)
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" onClick={()=>{
       if(birdPos>100){
        setBirdPos((pos)=>pos-80);
       }
    }}>
            <Start isStart={isStart} setStart={setStart}/>
            <Background  />
            <FlappyBird isStart={isStart} birdPos={birdPos} setBirdPos={setBirdPos}  />
            <Poles isStart={isStart} rotation={180} height ={topPoleHeight} top={4} newHeight={newHeight} setNewHeight={setNewHeight} newLoc={newLoc} setNewLoc={setNewLoc} />           
            <Poles isStart={isStart} rotation={0} height={(900-newHeight-gap)} top={(newHeight+gap)}  newLoc={newLoc}/>
        </div>
  )
}

export default App
