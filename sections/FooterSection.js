import React from 'react'
import styles from '../styles/footer.module.css'
function FooterSection() {
  return (
    <div className={`w-100 ${styles.footerWrapper}`}>
        <div className='flex'>
            <div className='flex flex-column m-5lftrght'>
                <h5 className='montserrat-bold text-32 m-0'>Info</h5>
                <div className='info flex flex-column'>
                    <a href="#home"className={`${styles.links} montserrat-regular`}>Main</a>
                    <a href="#about"className={`${styles.links} montserrat-regular`}>About</a>
                    <a href="#work"className={`${styles.links} montserrat-regular`}>Works</a>
                    <a href="#contact"className={`${styles.links} montserrat-regular`}>Contact</a>
                    
                </div>
            </div>
            <div className='flex flex-column  m-5lftrght'>
                <h5 className='montserrat-bold text-32 m-0'>Links</h5>
                <div className='flex'>
                    <div className={`m-1 ${styles.github} ${styles.icon}`}>
                    </div>
                    <div className={`m-1 ${styles.linkedin} ${styles.icon}`}>
                    </div>
                    <div className={`m-1 ${styles.mail} ${styles.icon}`}>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection