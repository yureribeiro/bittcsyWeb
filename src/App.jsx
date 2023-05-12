import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.css'

import Policy from './pages/Policy'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Sobre from './pages/sobre'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className={styles.containerApp}>

      <Header />
      <main className={styles.mainApp}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </main>
      <Footer />

    </div>
  )
}

export default App
