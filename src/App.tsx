import { useState } from 'react';
import './App.css'
import { Background } from './components/Background'
import { FlappyBird } from './components/FlappyBird'
const initialPos = 300;
function App() {
  const [birdPos, setBirdPos] = useState(initialPos);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
            <Background birdPos={birdPos} setBirdPos={setBirdPos} />
            <FlappyBird birdPos={birdPos} setBirdPos={setBirdPos}/>
        </div>
  )
}

export default App
