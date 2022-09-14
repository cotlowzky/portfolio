import React from 'react'
import styles from '../styles/navbar.module.css'
function TopNavbar() {
  return (
    <div className={styles.navbarWrapper}>
        <p>About</p>
        <p>Works</p>
        <p>Contact</p>
    </div>
  )
}

export default TopNavbar