
import { Suspense } from 'react'
import './App.css'
import GetData from './fatch_async_await'
// import Getinfo from './interface_with_object'
// import Getprops from './Props'
// import Distruction from './props_Distruction'
// import Objectmap from './map'
// import Condition from './condition'
// import Event from './eventHandling'
// import Usestage from './Usestate'

function App() {
async function LoadData(){
  const responce=fetch ("https://jsonplaceholder.typicode.com/users")
  const data=(await responce).json()
  return data
}

  return (
    <>
      {/* <Getprops name="pranto" age="22"></Getprops>
      <Getinfo></Getinfo>
      <Distruction name='pranto roy' age={22} comment='React.js'></Distruction>
    <Objectmap></Objectmap>
    <Condition task="homework" isBool={true} ></Condition>
    <Event></Event>
    <Usestage></Usestage> */}
<Suspense fallback={<p>Loading....</p>}>
<GetData data={LoadData()} ></GetData>

</Suspense>

    </>
  )
}

export default App
