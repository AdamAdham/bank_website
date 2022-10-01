import {React,useState} from 'react'
import logo from '../assets/My Logo new.svg'
import '../index.css'

function NavBar() {
const [openMenu, setOpenMenu] = useState(false)

function toggleMenu(){
  setOpenMenu((prev)=>!prev)
}

  return (
    <nav>
      <img src={logo} alt=""/>
      <div className={
        `right-column ${openMenu?"open-nav":""}`}
        >
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div 
      className={`menu ${openMenu&&"openmenu"}`}
      id="menu"
      onClick={toggleMenu}
      >
        <div>
            <span id="line1"></span>
            <span id="line2"></span>
            <span id="line3"></span>
        </div>
    </div>
    </nav>
  )
}

export default NavBar