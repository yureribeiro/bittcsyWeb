import React from "react";
import styles from './header.module.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo-tipo" className={styles.logo} />
      <div className={styles.links}>
        <Link to='/' className={styles.link}>Início</Link>
        <Link to='/sobre' className={styles.link} >Sobre</Link>
        <Link to='/contact' className={styles.link} >Entre em Contato</Link>
        <Link to='/policy' className={styles.link} >Política de privacidade</Link>
      </div>
    </header>
  )
}

export default Header