import { useState } from 'react'
import './App.css'
import { NavBar, Hero, Product, Rating, Mail, Footer } from './sections';


function App() {
  return (
    <>
      <section className='p-10 py-7'>
        <NavBar />
      </section>
      <section>
        <Hero />
      </section>
      <section className='p-20 border border-black'>
        <Product />
      </section>
      <section className='p-20 border border-black'>
        <Rating />
      </section>
      <section className='p-20 border border-black'>
        <Mail />
      </section>
      <section className='p-20 border border-black'>
        <Footer />
      </section>
    </>
  )
}

export default App
