import { use } from "react"
import GetCard from "./infocard"

export default function GetData({data}){
    const Data=use(data)
return (
    <>
    <h1 style={{color:"Red"}}>Users:{Data.length} </h1>
    {
       Data.map(d=><GetCard user={d}></GetCard>)
    }
    </>
)


}