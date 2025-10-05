import { useState } from "react";
import "./App.css";
import { NavBar, Hero, Product, Rating, Offer, Customers, Mail, Footer } from "./sections";

function App() {
  return (
    <>
      <section className="p-10 py-7">
        <NavBar />
      </section>
      <section>
        <Hero />
      </section>
      <section className="px-8">
        <Product />
      </section>
      <section className="px-8">
        <Rating />
      </section>
      <section className="px-8 mb-20">
        <Offer />
      </section>
      <section className="px-8 bg-violet-50">
        <Customers />
      </section>
      <section className="px-8 py-20">
        <Mail />
      </section>
      <section className="p-8 bg-black">
        <Footer />
      </section>
    </>
  );
}

export default App;
