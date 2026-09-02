
import './App.css'
import Getinfo from './interface_with_object'
import Getprops from './Props'
import Distruction from './props_Distruction'
import Objectmap from './map'
import Condition from './condition'
import Event from './eventHandling'
import Usestage from './Usestate'

function App() {


  return (
    <>
      <Getprops name="pranto" age="22"></Getprops>
      <Getinfo></Getinfo>
      <Distruction name='pranto roy' age={22} comment='React.js'></Distruction>
    <Objectmap></Objectmap>
    <Condition task="homework" isBool={true} ></Condition>
    <Event></Event>
    <Usestage></Usestage>

    </>
  )
}

export default App
