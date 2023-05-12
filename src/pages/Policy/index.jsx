import React from "react"
import styles from './policy.module.css'

const Policy = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> Bittcsy - Política de Privacidade</h1>

        <div className={styles.policys}>
          <h3 className={styles.subtitle}>Coleta de Dados</h3>
          <p className={styles.text}>
            <span className={styles.numbers}>1.1.</span> Informações Pessoais: O aplicativo Bittscy pode coletar informações pessoais
            que você fornece voluntariamente ao criar uma conta no aplicativo, como nome de usuário, endereço de e-mail.
          </p>
          <br />

          <p className={styles.text}>
            <span className={styles.numbers}>1.2.</span> Informações de uso: O aplicativo Bittscy também pode coletar informações sobre
            como você usa o aplicativo, incluindo as páginas que você visita, o tempo que você passa no aplicativo e outras informações de uso.
          </p>
          <br />

          <h3 className={styles.subtitle}>Uso de Dados</h3>
          <p className={styles.text}>
            <span className={styles.numbers}>2.1.</span>  O aplicativo Bittscy pode usar suas informações pessoais para autenticar
            sua conta, fornecer suporte ao cliente e melhorar o aplicativo.
          </p>
          <br />

          <p className={styles.text}><span className={styles.numbers}>2.2.</span>  O aplicativo Bittscy pode usar suas informações de uso para entender melhor
            como os usuários usam o aplicativo e melhorar a experiência do usuário.</p>
          <br />

          <h3 className={styles.subtitle}>Compartilhamento de Dados</h3>
          <p className={styles.text}>
            <span className={styles.numbers}>3.1.</span>O aplicativo Bittscy não compartilha suas informações pessoais com terceiros
            sem o seu consentimento.</p>
          <br />

          <p className={styles.text}><span className={styles.numbers}>3.2.</span> O aplicativo Bittscy pode compartilhar suas informações de uso com terceiros para
            fins de análise e melhoria do aplicativo.</p>
          <br />

          <h3 className={styles.subtitle}>Segurança de Dados</h3>
          <p className={styles.text}><span className={styles.numbers}>4.1.</span> O aplicativo Bittscy usa medidas de segurança razoáveis para proteger suas informações
            pessoais contra acesso não autorizado, alteração ou divulgação.</p>
          <br />

          <p className={styles.text}> <span className={styles.numbers}>4.2.</span>  O aplicativo Bittscy pode armazenar suas informações pessoais fora do seu país de residência.</p>
          <br />

          <h3 className={styles.subtitle}>Alterações na Política de Privacidade</h3>
          <p className={styles.text}><span className={styles.numbers}>5.1.</span>  O aplicativo Bittscy pode atualizar esta Política de Privacidade de tempos em tempos. Quando
            fizermos alterações significativas, publicaremos uma notificação no aplicativo. </p>
          <br />

          <h3 className={styles.subtitle}>Notícias no App</h3>
          <p className={styles.text}><span className={styles.numbers}>6.1.</span> a Bittcsy não coleta nenhum tipo de dado do usuário para ter acesso as notícias. </p>
          <p className={styles.text}><span className={styles.numbers}>6.2.</span> Compartilhamos somente o título das notícias, fornecidos de forma externa pela CryptoPanic API, ao acessar a fonte da notícia, o usuário é redirecionado para o site da CryptoPanic através de um modal, para visualizar detalhes da notícia.</p>

          <h3 className={styles.subtitle}>Contato</h3>
          <p className={styles.text}><span className={styles.numbers}>7.1.</span>  Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco em bittcsy@gmail.com .</p>
        </div>
      </div>
    </>
  )
}

export default Policy