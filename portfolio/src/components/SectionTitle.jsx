import football from '../assets/football-colored.png'
import React from 'react'
import './sectionTitle.css'

const SectionTitle = () => {
  return (
    <h2 className="section-title">
        <img src={football} alt="" />
    </h2>
  )
}

export default SectionTitle