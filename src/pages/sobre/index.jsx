import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Olá, meu nome é Yure Ribeiro e sou o desenvolvedor do aplicativo Bittcsy.</h2>
      <p className={styles.description}>
        Sou um entusiasta do mundo cripto e da tecnologia em geral. Decidi criar o aplicativo Bittcsy
        para tornar a tecnologia bitcoin e blockchain acessível ao público brasileiro. Meu objetivo
        principal é educar o maior número possível de pessoas sobre o universo cripto, com foco especial
        no bitcoin, mas também abrangendo outras criptomoedas.
      </p>
      <p className={styles.description}>
        Sabemos que somos todos novos neste mundo em constante evolução, que já faz parte de nossas
        vidas e é parte do futuro. Com o app Bittcsy, você pode aprender e conhecer mais sobre a
        tecnologia Bitcoin e Blockchain, acompanhar as notícias relacionadas ao mundo cripto, estar a
        par das tendências e das criptomoedas mais valorizadas do mercado, além de visualizar o status
        e o ranking do mercado cripto. Além disso, você pode participar da comunidade do aplicativo e
        trocar conhecimentos com outros usuários.
      </p>
      <p className={styles.description}>
        O Bittcsy é uma ferramenta poderosa e acessível para quem deseja se aprofundar no universo cripto.
        Baixe agora mesmo e faça parte dessa comunidade que está mudando o mundo.
      </p>
      <hr className={styles.hr} />
      <p className={styles.info}>contato via email: yureribeirocontato@gmail.com</p>
      <p className={styles.info}>Somente Whatsapp: (62) 98466-6739</p>
    </div>
  )
}

export default Sobre