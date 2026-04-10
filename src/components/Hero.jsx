import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-950 pt-20 pb-10 md:pt-0">
      {/* Fundo gradiente sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-DEFAULT/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8 md:space-y-12"
        >
          {/* Logo / Brand */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-DEFAULT rounded-full"></div>
            <span className="text-sm md:text-base font-semibold tracking-wider text-primary-400 uppercase">
              DuBrasil Nexa
            </span>
          </motion.div>

          {/* Headline Principal */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight md:leading-tight">
              <span className="block text-white mb-2 md:mb-3">
                A Nexa organiza,
              </span>
              <span className="gradient-text block mb-2 md:mb-3">
                centraliza e aplica inteligência
              </span>
              <span className="block text-white">
                ao atendimento.
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-lg md:text-2xl text-gray-300 leading-relaxed font-light"
          >
            Mais do que atender, a Nexa <span className="text-primary-400 font-semibold">conecta processos, setores</span> e <span className="text-accent-DEFAULT font-semibold">experiência do cliente.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8"
          >
            <button className="btn-primary">
              <span className="flex items-center justify-center gap-2">
                Começar Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="btn-secondary">
              Ver Demonstração
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="pt-8 md:pt-12 flex flex-wrap gap-8 md:gap-12 border-t border-gray-800"
          >
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-primary-400">500+</p>
              <p className="text-sm text-gray-400">Empresas atendidas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold gradient-text">24/7</p>
              <p className="text-sm text-gray-400">Suporte contínuo</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-accent-DEFAULT">99.9%</p>
              <p className="text-sm text-gray-400">Disponibilidade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
