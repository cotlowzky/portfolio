import React from 'react'
import styles from '../styles/about.module.css'
function SkillsCard(props) {
  return (
    <div className={`${styles.cardWrapper}`}>
        <p className={`text-upper text-20 text-black montserrat-bold text-shadow ${styles.tech}`}>{props.tech}</p>
        <p className={`text-upper text-white montserrat-bold ${styles.level}`}>{props.level}</p>
    </div>
  )
}

export default SkillsCard