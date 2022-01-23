import { useState } from 'react'
import { Header, Footer, Welcome, Services, Transactions } from './components'

import './App.css'

function App() {

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Header />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  )
}

export default App
