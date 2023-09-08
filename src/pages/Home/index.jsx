import React from "react"
import styles from './home.module.css'
import logo from '../../assets/logo.png'
import world from '../../assets/world-image.jpg'
import learn from '../../assets/learn.jpg'
import news from '../../assets/news-image.jpg'
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.apresentation}>
        <div className={styles.titleContent}>
          <h1 className={styles.title}>Bittcsy</h1>
          <p className={styles.description}>Acompanhe o mundo Cripto!</p>
          <Link to={'https://play.google.com/store/apps/details?id=com.yureribeirodev.Bittcsy'} target="_blank" className={styles.linkAndroid}>Baixe o App</Link>
        </div>
        <img src={logo} alt="logo-bittcsy" className={styles.Logo} />
      </section>

      <article className={styles.cards}>
        <section className={styles.section}>
          <img src={learn} alt="learning-bitcoin" className={styles.image} />
          <div className={styles.textContentCard}>
            <h2 className={styles.titleCard}>Aprenda Sobre Bitcoin e Blockchain</h2>
            <p className={styles.descriptionCard}>Em definitivo, o Bitcoin é a maior inovação tecnológica desde a
              internet, é revolucionário, sem precedentes e tem o potencial de
              mudar o mundo de uma forma jamais vista. <br />À moeda, ele é o futuro.
              Ao avanço da liberdade individual, é uma esperança e uma grata
              novidade</p>
          </div>
        </section>
        <section className={styles.section}>
          <img src={news} alt="logo-bittcsy" className={styles.image} />
          <div className={styles.textContentCard}>
            <h2 className={styles.titleCard}>Notícias do mercado cripto</h2>
            <p className={styles.descriptionCard}>Acompanhe as últimas noticias do mundo cripto em tempor real, Esteja sempre um passo à frente e saiba tudo o que está acontecendo no mercado cripto.</p>
          </div>
        </section>
        <section className={styles.section}>
          <img src={world} alt="logo-bittcsy" className={styles.image} />
          <div className={styles.textContentCard}>
            <h2 className={styles.titleCard}>Acompanhe o mundo cripto!</h2>
            <p className={styles.descriptionCard}>Baixe o App disponivel para Android e iOS, e fique por dentro do mundo Cripto!</p>
          </div>
        </section>
      </article>

    </main>
  )
}

export default Home