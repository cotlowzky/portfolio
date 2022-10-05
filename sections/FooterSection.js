import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link';
function FooterSection() {
  return (
    <div className={`w-100 ${styles.footerWrapper}`}>
        <div className='flex'>
            <div className='flex flex-column m-5lftrght'>
                <h5 className={`${styles.footerSubTitle} montserrat-bold text-32 m-0`}>Info</h5>
                <div className='info flex flex-column'>
                    <a href="#home"className={`${styles.links} montserrat-regular`}>Main</a>
                    <a href="#about"className={`${styles.links} montserrat-regular`}>About</a>
                    <a href="#work"className={`${styles.links} montserrat-regular`}>Works</a>
                    <a href="#contact"className={`${styles.links} montserrat-regular`}>Contact</a>
                    
                </div>
            </div>
            <div className='flex flex-column  m-5lftrght'>
                <h5 className={`${styles.footerSubTitle} montserrat-bold text-32 m-0`}>Links</h5>
                <div className='flex'>
                    <Link href="https://github.com/cotlowzky">
                        <div className={`m-1 ${styles.github} ${styles.icon}`}>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/filipkotlowski">
                        <div className={`m-1 ${styles.linkedin} ${styles.icon}`}>
                        </div>
                    </Link>
                    <Link href="mailto:kotlowskifilip@gmail.com">
                        <div className={`m-1 ${styles.mail} ${styles.icon}`}>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection