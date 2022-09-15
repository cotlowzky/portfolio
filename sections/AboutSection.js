import React from 'react'
import styles from '../styles/about.module.css'

function AboutSection() {
  return (
    <div className={`${styles.aboutBgWrapper}`}>
        <div className={`${styles.aboutWrapper}`}>
            <h2 className='montserrat-bold text-white text-96 text-title'>About me</h2>
            <p className='incon-bold text-20 text-white text-upper'>let's get to know each other</p>
            <p className='ssp-semibold text-32 text-black flex-left'>I make websites and do it well.</p>
            <span className={`montserrat-regular text-20 ${styles.aboutDescription}`}>With a passion for making websites. I enjoy making project with a bit of aesthtetic elements. Every day I am smiling person who is always optimistic about the new task. It is the start of my jouruney in web development, because I am 19 year old. I am also quickly learning new things. I was starting with basics HTML CSS JS etc. Now I am writing code in React but i also have a background in React Native and UI designing in Figma. So I make design in Figma and then I am coding that.</span>
            <p className='incon-bold text-20 text-white text-upper'>What i like</p>
        </div>
    </div>
  )
}

export default AboutSection