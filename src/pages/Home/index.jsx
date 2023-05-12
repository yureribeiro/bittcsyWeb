import React from "react"
import styles from './home.module.css'
import logo from '../../assets/logo.png'
import world from '../../assets/world-image.jpg'
import learn from '../../assets/learn.jpg'
import news from '../../assets/news-image.jpg'


const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.apresentation}>
          <div className={styles.text}>
            <h2 className={styles.titleApresentation}>Bittcsy</h2>
            <p className={styles.descriptionApresentation}>Acompanhe o mundo Cripto!</p>
          </div>
          <img src={logo} alt="logo-bittcsy" className={styles.imageLogo} />
        </section>
        <section className={styles.learn}>
          <img src={learn} alt="learning-bitcoin" className={styles.image} />
          <div className={styles.text}>
            <h2 className={styles.title}>Aprenda Sobre Bitcoin e Blockchain</h2>
            <p className={styles.description}>Você está interessado em aprender mais sobre Bitcoin e Blockchain? Este é o lugar certo para você! Aqui você encontrará informações detalhadas sobre essas tecnologias inovadoras.</p>
          </div>
        </section>
        <section className={styles.news}>
          <img src={news} alt="logo-bittcsy" className={styles.image} />
          <div className={styles.text}>
            <h2 className={styles.title}>Notícias do mercado cripto</h2>
            <p className={styles.description}>Acompanhe as últimas noticias do mundo cripto em tempor real, Esteja sempre um passo à frente e saiba tudo o que está acontecendo no mercado cripto.</p>
          </div>
        </section>
        <section className={styles.discussion}>
          <img src={world} alt="logo-bittcsy" className={styles.image} />
          <div className={styles.text}>
            <h2 className={styles.title}>Participe da comunidade e mais...</h2>
            <p className={styles.description}>Junte-se à nossa comunidade e faça parte de uma rede de entusiastas de criptomoedas. Compartilhe suas ideias, tire suas dúvidas e contribua com o nosso chat público. Além disso, você pode conferir as criptomoedas mais pesquisadas nas últimas 24 horas e descobrir tendências e insights valiosos. Não perca a chance de fazer parte de uma comunidade vibrante e aprender mais sobre o mundo das criptomoedas.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home