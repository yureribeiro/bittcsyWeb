import React from "react"
import styles from './policy.module.css'

const Policy = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.date}>- ultima atualização: 07/09/2023</p>
        <h1 className={styles.title}> Bittcsy - Política de Privacidade</h1>

        <div className={styles.policys}>
          <h3 className={styles.subtitle}>Coleta de Dados</h3>
          <p className={styles.text}>
            <span className={styles.numbers}>1.1.</span> A Bittscy não coleta informações pessoais de nenhum usuário como e-mail, senha, documentos e etc.
          </p>

          <h3 className={styles.subtitle}>Compartilhamento de Dados</h3>
          <p className={styles.text}>
            <span className={styles.numbers}>2.1. </span> A Bittscy não compartilha suas informações pessoais com terceiros
            sem o seu consentimento.</p>

          <p className={styles.text}><span className={styles.numbers}>2.2. </span> A Bittscy pode compartilhar suas informações de uso com terceiros para
            fins de análise e melhoria do aplicativo.</p>

          <h3 className={styles.subtitle}>Segurança de Dados</h3>
          <p className={styles.text}><span className={styles.numbers}>3.1. </span> A Bittscy usa medidas de segurança razoáveis para com a segurança do aplicativo.</p>


          <h3 className={styles.subtitle}>Alterações na Política de Privacidade</h3>
          <p className={styles.text}><span className={styles.numbers}>4.1. </span>  A Bittscy pode atualizar esta Política de Privacidade de tempos em tempos. Quando
            fizermos alterações significativas, publicaremos uma notificação no aplicativo. </p>

          <h3 className={styles.subtitle}>Notícias no App</h3>
          <p className={styles.text}><span className={styles.numbers}>5.1. </span> A Bittcsy não coleta nenhum tipo de dado do usuário para ter acesso as notícias. </p>
          <p className={styles.text}><span className={styles.numbers}>5.2. </span> Compartilhamos somente o título e fonte das notícias, fornecidos de forma externa pela CryptoPanic API, <br /> ao acessar a fonte da notícia, o usuário é redirecionado para o site da CryptoPanic externamente, para visualizar detalhes da notícia.</p>

          <h3 className={styles.subtitle}>Contato</h3>
          <p className={styles.text}><span className={styles.numbers}>6.1. </span>  Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco em bittcsy@gmail.com .</p>
        </div>
      </div>
    </>
  )
}

export default Policy