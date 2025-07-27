type startProp = {
    isStart : boolean
    setStart: React.Dispatch<React.SetStateAction<boolean>>
}
export const Start = ({isStart,setStart}:startProp) => {
    if(isStart) return null;
    return (
        <div className="cursor-pointer absolute w-[200px] bg-black px-3 py-1 rounded-xl top-100 left-1/2 transform -translate-x-1/2 z-10 text-white text-2xl font-bold"
             onClick={()=>{setStart(()=>true)}}>
            {!isStart && "Click Here To Start Game"}
        </div>
    )
}