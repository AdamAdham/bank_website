import {React,useRef} from 'react'

const CallToAction = (props) => {

    return (
    <button ref={button} onClick={navigate}>props.promt</button>
  )
}

export default CallToAction