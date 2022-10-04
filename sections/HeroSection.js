import React from 'react'
import WaveComponent from '../components/WaveComponent'
import styles from '../styles/hero.module.css'
import heroImage from '../assets/img/person-stock.png'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className={`flex flex-column flex-center ${styles.heroWrapper}`}>
        <h1 className='montserrat-bold text-32 text-center name'>Hi, my name is <span className='text-yellow'>Filip Kotłowski</span></h1>
        <h3 className={`montserrat-bold text-112 text-upper work-text ${styles.heroText}`}>web developer</h3>
        <h5 className='incon-bold text-20 flex-left location'>based in Opole, Poland</h5>
        <div className='heroImage'>
          <Image src={heroImage} alt="smiling guy" height="650px" width="600px"/>
        </div>
        <WaveComponent />
    </div>
  )
}

export default HeroSection