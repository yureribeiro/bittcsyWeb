import React, { useState } from "react"
import emailjs from '@emailjs/browser'
import styles from './form.module.css'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_jcc4gei', 'template_xh2v8p8', templateParams, 'mmRto9EDWK03A5uk-')
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("ERRO: ", err)
      })
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Entre em contato com o suporte via email</h1>

      <form onSubmit={sendEmail} className={styles.form}>
        <label className={styles.label}>Nome</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu Nome"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className={styles.label}>Mensagem</label>
        <textarea
          className={styles.input}
          type="text"
          placeholder="Digite sua mensagem"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className={styles.buttonsDiv}>
          <input
            className={styles.button}
            type='submit'
            value='Enviar'
          />
        </div>
        <p className={styles.info}>Sua mensagem será enviada ao email: bittcsy@gmail.com</p>
      </form>
    </section>
  )
}

export default Form