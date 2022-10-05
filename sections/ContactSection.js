import React from 'react'
import styles from '../styles/contact.module.css'
import contactImage from '../assets/img/contactphoto.jpg'
import Image from 'next/image'
import {goToGithub} from '../constant/functions'
import Link from 'next/link';

function ContactSection() {
  return (
    <div className='flex w-100p flex-column m-5btm p-5top' id="contact"> 
        <h2 className='montserrat-bold text-black text-96 text-title contact m-5btm'>Contact</h2>
        <div className='flex contact-section'>
            <div className='w-50p contact-photo'>
                <Image src={contactImage}/>
            </div>
            <div className='w-50p flex-space-around flex-column flex contact-buttons m-3'>
                <Link href="https://github.com/cotlowzky"><div className={`montserrat-bold github text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} `}><p>GitHub</p></div></Link>
                <Link href="https://www.linkedin.com/in/filipkotlowski"><div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} `}><p>LinkedIn</p></div></Link>
                <Link href="mailto:kotlowskifilip@gmail.com"><div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton}`}><p>Mail</p></div></Link>
                <Link href="tel:532075390"><div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton}`}><p>Phone</p></div></Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection