import { useEffect } from "react";
import img from "../assets/yellowbird-upflap.png";
export type flappyProp = {
    birdPos:number,
    setBirdPos:React.Dispatch<React.SetStateAction<number>>
    isStart:boolean
}
export const FlappyBird = ({birdPos,setBirdPos,isStart}:flappyProp) => {
  useEffect(() => {
  const groundLevel = 780;
  let interval: number;

  if (isStart) {
    interval = setInterval(() => {
      setBirdPos((pos) => {
        if (pos < groundLevel) {
          return pos + 10;
        } else {
          return groundLevel;
        }
      });
    }, 50);
  }

  return () => {
    clearInterval(interval);
  };
}, [isStart]);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${birdPos}px` }}
    >
      <img src={img} className="w-18 h-12" alt="bird" />
    </div>
  );
};
