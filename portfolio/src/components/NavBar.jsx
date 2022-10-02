import {React,useState,useEffect} from 'react'
import {Link} from "react-scroll"
import logo from '../assets/My Logo new.svg'
import './Navbar.css'

function NavBar(props) {
  const {openMenu,toggle} = props /*Const?*/
  let [windowWidth,setWindowWidth] = useState(window.innerWidth)

   useEffect(()=>{
    function watchWidth(){
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize",watchWidth)

    return ()=>window.removeEventListener("resize",watchWidth)
   },[])

  return (
    <nav>
      <img src={logo} alt="" className={openMenu?"blur":""}/>
      
      <div 
      className={`menu ${openMenu&&"openmenu"}`}
      id="menu"
      onClick={toggle}
      >
        <div>
            <span id="line1"></span>
            <span id="line2"></span>
            <span id="line3"></span>
        </div>
    </div>

    <div className={
        `right-column ${openMenu?"open-nav":""}`}
        >
        <ul>
          <li><Link to="hero" spy={true} smooth={true} offset={-10} duration={500} onClick={(windowWidth<800)?toggle:()=>{}} >About</Link></li>
          <li><Link to="hero" spy={true} smooth={true} offset={-10} duration={500} onClick={(windowWidth<800)?toggle:()=>{}}>Experience</Link></li>
          <li><Link to="hero" spy={true} smooth={true} offset={-10} duration={500} onClick={(windowWidth<800)?toggle:()=>{}}>Projects</Link></li>
          <li><Link to="hero" spy={true} smooth={true} offset={-10} duration={500} onClick={(windowWidth<800)?toggle:()=>{}}>Contact</Link></li>
        </ul>
      </div>

    </nav>
  )
}

export default NavBar