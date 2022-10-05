import React from 'react'
import styles from '../styles/contact.module.css'
import contactImage from '../assets/img/contactphoto.jpg'
import Image from 'next/image'
function ContactSection() {
  return (
    <div className='flex w-100p flex-column m-5btm p-5top' id="contact"> 
        <h2 className='montserrat-bold text-black text-96 text-title contact m-5btm'>Contact</h2>
        <div className='flex contact-section'>
            <div className='w-50p contact-photo'>
                <Image src={contactImage}/>
            </div>
            <div className='w-50p flex-space-around flex-column flex contact-buttons m-3'>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} `}><p>GitHub</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton} `}><p>LinkedIn</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton}`}><p>Mail</p></div>
                <div className={`montserrat-bold  text-20 text-white text-small-caps p-4 m-1 ${styles.contactButton}`}><p>Phone</p></div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection