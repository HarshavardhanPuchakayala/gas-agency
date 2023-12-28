import React from 'react'
import Header from "./Components/Header"
import AboutUs from './Components/AboutUs'
import Services from "./Components/Services"
import WhyUs from "./Components/WhyUs"
import Gallery from './Components/Gallery'
import Newsletter from "./Components/Newsletter"
import Products from "./Components/Products"
import Footer from './Components/Footer'
export default function App() {
  return (
    <>
    <main>
      <Header/>
      <AboutUs/>
      <WhyUs/>
      <Products/>
      <Services/>
      <Gallery/>
      <Newsletter/>
    </main>
    <Footer/>
    </>
  )
}
