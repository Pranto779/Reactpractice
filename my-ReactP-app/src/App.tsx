
import './App.css'
import Getinfo from './interface_with_object'
import Getprops from './Props'
import Distruction from './props_Distruction'

function App() {


  return (
    <>
      <Getprops name="pranto" age="22"></Getprops>
      <Getinfo></Getinfo>
      <Distruction name='pranto roy' age={22} comment='React.js'></Distruction>
    </>
  )
}

export default App
