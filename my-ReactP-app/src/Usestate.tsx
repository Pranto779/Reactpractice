import { useState } from "react";

export default function Usestage(){
const [run,totalRun]=useState(0)
const HandleRun_1=()=>{
totalRun(run+1)
return totalRun

}
const HandleRun_4=()=>{
totalRun(run+4)
return totalRun

}
const HandleRun_6=()=>{
totalRun(run+6)
return totalRun

}




return (
  
    <>
    
    <div className="div">
        <h1>Cricket <br /> <br /><br /><span style={{color:"orange", fontWeight:"bold"}}> Score  {run} </span></h1>
        <button onClick={HandleRun_1} className="style">Single Run</button>
        <button onClick={HandleRun_4} className="style">4 Run</button>
        <button onClick={HandleRun_6} className="style">6 Run</button>
        
    </div>
    </>
)

}
