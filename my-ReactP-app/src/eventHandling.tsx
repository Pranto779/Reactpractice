export default function Event(){
const Handle=()=>{
alert("Work Is done")

}

return(
  <> 
  <div style={{color:"red", fontWeight:"Bold",backgroundColor:"white",width:"40%",height:"10vh", border:"1px solid orange", borderRadius:"10px", marginLeft:"360px", marginTop:"10px", marginBottom:"10px"}}>
     <p>How About the Job</p>
    <button onClick={Handle} style={{display:"inline", background:"lime", color:"black", fontWeight:"bold"}}> Get Result</button>
  </div>
    </>
)
}