import React from 'react'
import styles from '../styles/contact.module.css'
import contactImage from '../assets/img/laptop.jpg'
import Image from 'next/image'
function ContactSection() {
  return (
    <div className='flex w-100p flex-column m-5btm' id="contact"> 
        <h2 className='montserrat-bold text-black text-96 text-title contact m-5btm'>Contact</h2>
        <div className='flex'>
            <div className='w-50p h-20'>
                <Image src={contactImage}/>
            </div>
            <div className='w-50p h-20 flex-space-btwn flex-column flex'>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} ${styles.github} `}><p>GitHub</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} ${styles.linkedin}`}><p>LinkedIn</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} ${styles.mail}`}><p>Mail</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} ${styles.phone}`}><p>Phone</p></div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection