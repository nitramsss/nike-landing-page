import { useState } from 'react'
import './App.css'
import { NavBar, Hero, Product, Rating, Offer, Mail, Footer } from './sections';


function App() {
  return (
    <>
      <section className='p-10 py-7'>
        <NavBar />
      </section>
      <section>
        <Hero />
      </section>
      <section className='px-8'>
        <Product />
      </section>
      <section className='p-8'>
        <Rating />
      </section>
      <section className='p-20'>
        <Offer />
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
