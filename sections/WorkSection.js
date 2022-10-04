import React from 'react'
import styles from '../styles/work.module.css'

function WorkSection(props) {
  return (
    <div className="flex flex-column p-5top" id="work">
    <h2 className='montserrat-bold text-black text-96 text-title text-title-work'>Works</h2>
      <div className={`flex ${styles.websites}`}>
        {props.content}
      </div>
    </div>
  )
}

export default WorkSection