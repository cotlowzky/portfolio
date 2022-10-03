import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
function TopNavbar() {
  return (
    <div className={styles.navbarWrapper}>
      
      <Link href="/#about">
        <a className='incon-regular text-18'>About</a>
      </Link>
      <Link href="#work">
         <a className='incon-regular text-18'>Works</a>
      </Link>
      <Link href="#contact">
        <a className='incon-regular text-18'>Contact</a>
      </Link>
    </div>
  )
}

export default TopNavbar