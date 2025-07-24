import './App.css'
import { Background } from './components/Background'
import { FlappyBird } from './components/FlappyBird'

function App() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
            <Background />
            <FlappyBird />
        </div>
  )
}

export default App
