// interface
interface Info {
  name: string;
  age: number;
  mobile?: string;
}

const user: Info = {
  name: 'Pranto Roy',
  age: 22,
  mobile: '01951066952',
};

export default function Getinfo() {
  return (
    <div style={{color:"black",backgroundColor:"white",width:"40%",height:"30vh", border:"1px solid orange", borderRadius:"10px", margin:"auto" } }>
      <h3>Information Card</h3>
      <p>Name:{user.name}</p>
      <p>Age:{user.age} </p>
      <p>Mobile:{user.mobile} </p>
    </div>
  );
}
