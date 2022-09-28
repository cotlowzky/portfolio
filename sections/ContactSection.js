import React from 'react'
import styles from '../styles/contact.module.css'
import contactImage from '../assets/img/laptop.jpg'
import Image from 'next/image'
function ContactSection() {
  return (
    <div className='flex w-100p flex-column'> 
        <h2 className='montserrat-bold text-black text-96 text-title contact'>Contact</h2>
        <div className='flex'>
            <div className='w-50p h-20'>
                <Image src={contactImage} />
            </div>
            <div className='w-50p h-20'>
                <div className={`montserrat-bold text-small-caps p-2 m-1 ${styles.contactButton}`}>github</div>
                <div className={`montserrat-bold text-small-caps p-2 m-1 ${styles.contactButton}`}>linkedin</div>
                <div className={`montserrat-bold text-small-caps p-2 m-1 ${styles.contactButton}`}>mail</div>
                <div className={`montserrat-bold text-small-caps p-2 m-1 ${styles.contactButton}`}>phone</div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection