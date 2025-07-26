import { useEffect, useState } from "react";
import img from "../assets/yellowbird-upflap.png";

export const FlappyBird = () => {
  const [BirdPos, setBirdPos] = useState(300);

  useEffect(() => {
    const groundLevel = 780;  
    const interval = setInterval(() => {
      setBirdPos((pos) => {
        if (pos < groundLevel) {
          return pos + 10;
        } else {
            return groundLevel;
        }
      });
    }, 15); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${BirdPos}px` }}
    >
      <img src={img} className="w-18 h-12" alt="bird" />
    </div>
  );
};
