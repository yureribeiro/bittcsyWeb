import React, { useState, useEffect } from "react";
import styles from './header.module.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.svg'
import { Link } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Use useEffect para verificar a largura da tela e definir menuOpen com base nela
  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth <= 720);
    };

    window.addEventListener('resize', handleResize);

    // Chame handleResize uma vez para definir o estado inicial
    handleResize();

    // Remova o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.container}>
      <img src={logo} alt="logo-tipo" className={styles.logo} />
      <div className={styles.menu} onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </div>
      {(menuOpen || window.innerWidth > 720) && (
        <div className={styles.links}>
          <Link to='/' className={styles.link}>Início</Link>
          <Link to='https://play.google.com/store/apps/details?id=com.yureribeirodev.Bittcsy' target="_blank" className={styles.link}>Baixe o App</Link>
          <Link to='/sobre' className={styles.link} >Sobre</Link>
          <Link to='/contact' className={styles.link} >Entre em Contato</Link>
          <Link to='/policy' className={styles.link} >Política de privacidade</Link>
        </div>
      )}
    </header>
  )
}

export default Header