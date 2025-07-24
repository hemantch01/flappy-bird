import img from "../assets/background-day.png"
export const Background = ()=>{
    return <div className="relative flex justify-center w-full h-screen">
       <img src={img} alt="Background" />
    </div>
}