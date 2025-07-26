import { useEffect } from "react";
import img from "../assets/yellowbird-upflap.png";
import type { setReact } from "./Background";

export const FlappyBird = (props:setReact) => {
  useEffect(() => {
    const groundLevel = 780;  
    const interval = setInterval(() => {
      props.setBirdPos((pos) => {
        if (pos < groundLevel) {
          return pos + 10;
        } else {
            return groundLevel;
        }
      });
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${props.birdPos}px` }}
    >
      <img src={img} className="w-18 h-12" alt="bird" />
    </div>
  );
};
