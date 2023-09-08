import React from "react"
import styles from './footer.module.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.links}>
        <Link to='/' className={styles.link}>Inicio</Link>
        <Link to='https://play.google.com/store/apps/details?id=com.yureribeirodev.Bittcsy' target="_blank" className={styles.link}>Baixe o App</Link>
        <Link to='/policy' className={styles.link} >Política de privacidade</Link>
      </div>
    </footer>
  )
}

export default Footer