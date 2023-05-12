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
        <Link to='/sobre' className={styles.link} >Sobre</Link>
        <Link to='/policy' className={styles.link} >Política de privacidade</Link>
        <Link to='/contact' className={styles.link} >Entre em Contato</Link>
      </div>
    </footer>
  )
}

export default Footer