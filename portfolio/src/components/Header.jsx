import React from 'react'
import './Header.css'

const Header = (props) => {
  const {openMenu} = props
  return (
    <header id="hero" className={openMenu?"blur":""}>
        <h1 className="intro">Hi, I'm Adam</h1>
        <h2 className='proffesion'>Software Engineer</h2>
        <h3>Currently studying computer science and engineering
            at German University in Cairo and aspiring to be a full stack developer
        </h3>
    </header>
  )
}

export default Header