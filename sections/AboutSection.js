import React from 'react'
import SkillsCard from '../components/SkillsCard'
import styles from '../styles/about.module.css'

function AboutSection() {
  return (
    <div className={`p-5btm p-5top ${styles.aboutBgWrapper}`} id="about">
        <div className={`${styles.aboutWrapper}`}>
            <h2 className='montserrat-bold text-white text-96 text-title'>About me</h2>
            <p className='incon-bold text-20 text-white text-upper'>let's get to know each other</p>
            <p className='ssp-semibold text-32 text-black flex-left'>I make websites and do it well.</p>
            <span className={`montserrat-regular text-20 ${styles.aboutDescription}`}>With a passion for making websites. I enjoy making project with a bit of aesthtetic elements. Every day I am smiling person who is always optimistic about the new task. It is the start of my jouruney in web development, because I am 19 year old. I am also quickly learning new things. I was starting with basics HTML CSS JS etc. Now I am writing code in React but i also have a background in React Native and UI designing in Figma. So I make design in Figma and then I am coding that.</span>
            <p className='incon-bold text-20 text-white text-upper'>What i like</p>
            <p className='ssp-semibold text-32 text-black flex-left'>3 things to know about me</p>
            <span className={`montserrat-regular text-20 ${styles.aboutDescription}`}>1 - I like coding. That’s my passion and that’s why i want to work as web developer. I think the best way to work is working in job which is your passion</span>
            <span className={`montserrat-regular text-20 ${styles.aboutDescription}`}>2 - I like to watch movies, especially comedies. Commonly I also like to make laugh my friends. I also like to watch football, I am very huge fan from being a child.</span>
            <span className={`montserrat-regular text-20 flex-left ${styles.aboutDescription}`}>3 - That’s my favourite number</span>
            <p className='incon-bold text-20 text-white text-upper'>My skills</p>
            <div className={`m-5btm flex flex-wrap flex-center ${styles.skillsWrapper}`}>
              <SkillsCard tech="html" level="intermediate"/>
              <SkillsCard tech="css" level="intermediate"/>
              <SkillsCard tech="js" level="intermediate"/>
              <SkillsCard tech="react" level="begginer"/>
              <SkillsCard tech="react native" level="begginer"/>
              <SkillsCard tech="php" level="begginer"/>
              <SkillsCard tech="sql" level="begginer"/>
              <SkillsCard tech="python" level="begginer"/>
              <SkillsCard tech="figma" level="begginer"/>
              <SkillsCard tech="bootstrap" level="begginer"/>
            </div>
            <p className='incon-bold text-20 text-white text-upper'>education & experience</p>
            <p className='ssp-semibold text-32 text-black flex-left'>Where i was studied</p>
            <span className={`montserrat-regular text-20 flex-left m-1 ${styles.aboutDescription}`}>
            <span className='montserrat-bold'>from 2018 to 2022 - </span> Technikum nr 5 im. Tadeusza Kościuszki w Opolu - technik informatyk
            </span>
            <p className='ssp-semibold text-32 text-black flex-left'>My work places</p>
            <span className={`montserrat-regular text-20 flex-left m-1 ${styles.aboutDescription}`}>
              <span className='montserrat-bold'>from 01.03.2020 to 31.03.2020 -</span>  Hardware Storm Zdzieszowice - proffesional pracitce in computer service
            </span>
            <span className={`montserrat-regular text-20 flex-left m-1 ${styles.aboutDescription}`}>
              <span className='montserrat-bold'>from 01.10.2020 to 31.10.2020 -</span> IT DESK Opole - proffesional pracitce in computer service
            </span>
            <span className={`montserrat-regular text-20 flex-left m-1 ${styles.aboutDescription}`}>
            <span className='montserrat-bold'>from 01.02.2022 to now - </span>Odskocznia & Hoplandia in Opole - trainer and animator for kids
            </span>
        </div>
    </div>
  )
}

export default AboutSection