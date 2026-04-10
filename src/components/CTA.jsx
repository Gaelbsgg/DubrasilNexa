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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function CTA() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12 text-center"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">Pronto para transformar</span>
              <br />
              <span className="gradient-text">seu atendimento?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Junte-se a centenas de empresas que já utilizam a Nexa para profissionalizar seu atendimento e aumentar a satisfação dos clientes.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-8"
          >
            <button className="btn-primary px-8 py-4 md:px-10 md:py-5 text-base md:text-lg">
              <span className="flex items-center justify-center gap-2">
                Começar Gratuitamente
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="btn-secondary px-8 py-4 md:px-10 md:py-5 text-base md:text-lg">
              Agendar Demo
            </button>
          </motion.div>

          {/* Trust info */}
          <motion.div
            variants={itemVariants}
            className="pt-8 md:pt-12 space-y-4"
          >
            <p className="text-gray-400">
              ✓ Sem cartão de crédito necessário
              <span className="text-gray-600 mx-3">•</span>
              Configuração em 5 minutos
              <span className="text-gray-600 mx-3">•</span>
              Suporte 24/7
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
