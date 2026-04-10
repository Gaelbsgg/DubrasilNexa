import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Automation() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-accent-DEFAULT/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                <span className="gradient-text">Automações</span>
                <span className="text-white"> que agilizam</span>
              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
                seu dia a dia
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              Configure e personalize automações para criar <span className="text-primary-400 font-semibold">fluxos de ponta a ponta</span>, coletar informações, enviar mensagens e muito mais.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              {[
                'Fluxos personalizáveis end-to-end',
                'Coleta automática de dados',
                'Envio de mensagens inteligentes',
                'Integração com sistemas existentes',
                'Analytics em tempo real'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-DEFAULT rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-gray-300 group-hover:text-primary-400 transition-colors">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="btn-secondary mt-8"
            >
              Explorar Automações
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-DEFAULT/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl border border-primary-500/30 bg-gradient-to-br from-dark-900/50 to-dark-950/50 backdrop-blur-xl p-8 md:p-12 flex items-center justify-center">
              <div className="space-y-4 w-full">
                <div className="h-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl animate-pulse"></div>
                <div className="h-12 bg-gradient-to-r from-accent-DEFAULT/20 to-emerald-600/20 rounded-2xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
