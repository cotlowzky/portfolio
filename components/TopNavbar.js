import React from 'react'
import styles from '../styles/navbar.module.css'
function TopNavbar() {
  return (
    <div className={styles.navbarWrapper}>
        <p className='incon-regular text-18'>About</p>
        <p className='incon-regular text-18'>Works</p>
        <p className='incon-regular text-18'>Contact</p>
    </div>
  )
}

export default TopNavbar