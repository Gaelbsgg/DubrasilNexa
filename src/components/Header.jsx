import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-dark-950/80 border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary-400 to-accent-DEFAULT rounded-full group-hover:scale-125 transition-transform"></div>
            <span className="font-extrabold text-lg text-white group-hover:text-primary-400 transition-colors">
              NEXA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Sobre', href: '#' },
              { label: 'Recursos', href: '#' },
              { label: 'Preços', href: '#' },
              { label: 'Contato', href: '#' },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="btn-primary text-sm md:text-base px-5 md:px-6 py-2 md:py-2.5"
          >
            Começar
          </motion.button>
        </div>
      </div>
    </header>
  )
}
