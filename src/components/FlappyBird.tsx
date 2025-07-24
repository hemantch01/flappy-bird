import img from "../assets/yellowbird-upflap.png"
export const FlappyBird = ()=>{
    return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <img src={img} className="w-18 h-12"/>
    </div>
}