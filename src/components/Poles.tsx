import { useEffect } from "react";
import pole from "../assets/pipe-green.png";

type PolesType ={
    rotation:number,
    height:number,
    top:number,
    newHeight?:number,
    setNewHeight?:React.Dispatch<React.SetStateAction<number>>}

export const Poles = ({rotation,height,top,newHeight,setNewHeight}:PolesType) => {
      useEffect(() => {
        if (setNewHeight) {
            const randomHeight = Math.floor(Math.random() * height);
            setNewHeight(randomHeight);
        }
    }, [height, setNewHeight]);
    return (
        <div className="absolute right-140 z-10" style={{top:`${top}px`,}}>
            <img 
  src={pole} 
  alt="pipe"
  className="w-[100px]" 
  style={{ height: `${newHeight}px`, transform: `rotate(${rotation}deg)`
, objectFit: 'fill' }}
/>
        </div>
    );
}