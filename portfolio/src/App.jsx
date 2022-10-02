import {React,useState} from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CallToAction from './components/CallToAction'
import SectionTitle from './components/SectionTitle'
import { useLockedBody } from 'usehooks-ts'

function App() {
  const [openMenu, setOpenMenu] = useState(false)
   const [lockScroll,setLockScroll] = useLockedBody()

  function toggleMenu(){
    setLockScroll((prev)=>!prev)
    setOpenMenu((prev)=>!prev)
  }
  
  return (
    <div className="App">
      <Navbar openMenu={openMenu} toggle={toggleMenu}/>
      <Header openMenu={openMenu}/>
      <CallToAction targetId="adam" prompt="Contact Me"/>
      <SectionTitle/>
      <h1 className="test" id="adam">adam</h1>
      <h1 className="test" id="adham">adham</h1>
      <h1 className="test" id="fayek">Fayek</h1>
    </div>
  )
}

export default App
