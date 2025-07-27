import React, { useEffect } from "react";
import pole from "../assets/pipe-green.png";

type PolesType = {
    rotation: number;
    height: number;
    top: number;
    isStart: boolean;
    newHeight?: number;
    setNewHeight?: React.Dispatch<React.SetStateAction<number>>;
    newLoc?: number;
    setNewLoc?: React.Dispatch<React.SetStateAction<number>>;
};

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
    // Set initial random height only once when game starts
    useEffect(() => {
        if (!isStart) return;
        if (setNewHeight) {
            setNewHeight(() => Math.floor(Math.random() * height));
        }
    }, [isStart, setNewHeight, height]);

    // Handle movement (interval)
    useEffect(() => {
        if (!isStart || !setNewLoc || !setNewHeight) return;

        const interval = setInterval(() => {
            setNewLoc((prevLoc) => {
                // When offscreen, reset position and height
                if (prevLoc > 1000) {
                    setNewHeight(Math.floor(Math.random() * height));
                    return 550; // Reset to right side
                }
                return prevLoc + 5; // Move right to left
            });
        }, 50);

        return () => clearInterval(interval);
    }, [isStart, setNewLoc, setNewHeight, height]);

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
    );
};
