import {React,useRef} from 'react'
import {Link} from "react-scroll"
import "./callToAction.css"

const CallToAction = (props) => {
    return (
    <button ><Link to={props.targetId} spy={true} smooth={true} offset={-10} duration={500}>
      {props.prompt}
    </Link></button>
  )
}

export default CallToAction