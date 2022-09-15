import React from 'react'
import styles from '../styles/hero.module.css'
function HeroSection() {
  return (
    <div className={`flex flex-column flex-center ${styles.heroWrapper}`}>
        <h1 className='montserrat-bold text-32 text-center'>Hi, my name is <span className='text-yellow'>Filip Kotłowski</span></h1>
        <h3 className={`montserrat-bold text-112 text-upper ${styles.heroText}`}>web developer</h3>
        <h5 className='incon-bold text-20'>based in Opole, Poland</h5>
    </div>
  )
}

export default HeroSection