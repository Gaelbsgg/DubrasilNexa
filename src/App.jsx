import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Automation from './components/Automation'
import Control from './components/Control'
import Platform from './components/Platform'
import Benefits from './components/Benefits'
import Differentials from './components/Differentials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-dark-950 text-white overflow-x-hidden"
    >
      <Header />
      
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <Automation />
        <Control />
        <Platform />
        <Benefits />
        <Differentials />
        <CTA />
      </main>

      <Footer />
    </motion.div>
  )
}

export default App
