import { useEffect } from "react"
import pole from "../assets/pipe-green.png"

type PolesType = {
  rotation: number
  height: number
  top: number
  isStart: boolean
  newHeight?: number
  setNewHeight?: React.Dispatch<React.SetStateAction<number>>
  newLoc?: number
  setNewLoc?: React.Dispatch<React.SetStateAction<number>>
}

export const Poles = ({
  rotation,
  isStart,
  height,
  top,
  newHeight,
  setNewHeight,
  newLoc,
  setNewLoc,
}: PolesType) => {
  useEffect(() => {
    if (!isStart || !setNewLoc || !setNewHeight) return

    const containerWidth = 600
    const pipeWidth = 100

    const interval = setInterval(() => {
      setNewLoc((prev) => {
        // When pipe completely leaves left side → reset
        if (prev > containerWidth + pipeWidth) {
          setNewHeight(Math.floor(Math.random() * height))
          return -pipeWidth
        }
        return prev + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isStart, setNewLoc, setNewHeight, height])

  return (
    <div
      className="absolute z-10"
      style={{ top: `${top}px`, right: `${newLoc}px` }}
    >
      <img
        src={pole}
        alt="pipe"
        className="w-[100px]"
        style={{
          height: `${newHeight}px`,
          transform: `rotate(${rotation}deg)`,
          objectFit: "fill",
        }}
      />
    </div>
  )
}
