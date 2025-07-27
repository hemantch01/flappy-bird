import img from "../assets/background-day.png"
export const Background = ()=>{
    return <div className="flex justify-center h-[1000px] w-[600px] mx-auto  border-4 rounded-md" >
       <img src={img} alt="Background" className="w-[600px]" />
    </div>
}