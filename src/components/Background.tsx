import img from "../assets/background-day.png"
export type setReact = {
    birdPos:number,
    setBirdPos:React.Dispatch<React.SetStateAction<number>>
}
export const Background = ({birdPos,setBirdPos}:setReact)=>{
    return <div className="flex justify-center h-[1000px] w-[600px] mx-auto  border-4 rounded-md" onClick={()=>{
       if(birdPos>100){
        setBirdPos((pos)=>pos-80);
       }
    }}>
       <img src={img} alt="Background" className="w-[600px]" />
    </div>
}