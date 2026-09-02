
// interface

interface Info{
    name:string,
    age:number,
    comment?:string
}


export default function Distruction(info:Info){
    const {name,age,comment}=info

    return(
      <>
        <div className="counter">
            <p>my name is {name} and am {age} years old</p>
        <p> am learning {comment}</p></div>

      </>

    )
}