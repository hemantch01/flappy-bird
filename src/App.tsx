import { useState, useEffect } from "react"
import "./App.css"
import { Background } from "./components/Background"
import { FlappyBird } from "./components/FlappyBird"
import { Start } from "./components/StartMenu"
import { Poles } from "./components/Poles"

const initialPos = 300
const topPoleHeight = 500
export const baseHeight = topPoleHeight
const gap = 250
const rightPos = -100

function App() {
  const [birdPos, setBirdPos] = useState(initialPos)
  const [isStart, setStart] = useState(false)
  const [newHeight, setNewHeight] = useState(topPoleHeight)
  const [newLoc, setNewLoc] = useState(rightPos)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!isStart) return

    const birdSize = 20
    const pipeWidth = 100
    const pipeGap = 250
    const containerWidth = 600

    const birdX = containerWidth / 2
    const pipeRightX = containerWidth - newLoc
    const pipeLeftX = pipeRightX - pipeWidth

    const hitPipeX =
      birdX + birdSize > pipeLeftX &&
      birdX - birdSize < pipeRightX

    const hitPipeY =
      birdPos - birdSize < newHeight ||
      birdPos + birdSize > newHeight + pipeGap

    if (hitPipeX && hitPipeY) {
      setGameOver(true)
      setStart(false)
    }

    if (birdPos > 780) {
      setGameOver(true)
      setStart(false)
    }

    const pipePassed = pipeRightX < birdX - birdSize
    if (pipePassed && pipeRightX > birdX - birdSize - 10) {
      setScore((s) => s + 1)
    }
  }, [birdPos, newLoc, newHeight, isStart])

  const restartGame = () => {
    setBirdPos(initialPos)
    setNewHeight(topPoleHeight)
    setNewLoc(rightPos)
    setScore(0)
    setGameOver(false)
    setStart(true)
  }

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div
        className="relative w-[600px] h-full overflow-hidden ring-4 ring-slate-800"
        onClick={() => {
          if (gameOver) return
          if (birdPos > 100 && isStart) {
            setBirdPos((pos) => pos - 80)
          } else if (!isStart && !gameOver) {
            setStart(true)
          }
        }}
      >
        {!gameOver && <Start isStart={isStart} setStart={setStart} />}

        {/* SCORE */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 text-white text-4xl font-bold font-mono bg-green-600 px-10 py-4 rounded-2xl">
          score {score}
        </div>

        {/* GAME OVER */}
        {gameOver && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
            <div className="text-white text-3xl font-extrabold mb-4 bg-black px-6 py-2 rounded-lg border-4 border-black">
              GAME OVER
            </div>
            <button
              className="bg-black text-white text-2xl px-4 py-2 rounded-xl border-b-4 border-black active:border-b-0 active:translate-y-1 hover:brightness-110 transition-all font-bold"
              onClick={(e) => {
                e.stopPropagation()
                restartGame()
              }}
            >
              RESTART
            </button>
          </div>
        )}

        <Background />
        <FlappyBird
          isStart={isStart}
          birdPos={birdPos}
          setBirdPos={setBirdPos}
        />

        <Poles
          isStart={isStart}
          rotation={180}
          height={topPoleHeight}
          top={4}
          newHeight={newHeight}
          setNewHeight={setNewHeight}
          newLoc={newLoc}
          setNewLoc={setNewLoc}
        />

        <Poles
          isStart={isStart}
          rotation={0}
          height={900 - newHeight - gap}
          top={newHeight + gap}
          newLoc={newLoc}
        />
      </div>
    </div>
  )
}

export default App
