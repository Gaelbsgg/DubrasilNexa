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
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Control() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Visual - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96 order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl border border-primary-500/30 bg-gradient-to-br from-dark-900/50 to-dark-950/50 backdrop-blur-xl p-8 md:p-12">
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-400">Online</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-gradient-to-br from-accent-DEFAULT/20 to-emerald-600/20 rounded-xl"></div>
                  <div className="h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl"></div>
                  <div className="h-16 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                <span className="text-white">Supervisão das</span>
                <br />
                <span className="gradient-text">conversas</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
            >
              Supervisione as conversas da sua equipe em <span className="text-primary-400 font-semibold">tempo real</span> e garanta a <span className="text-accent-DEFAULT font-semibold">melhor experiência para seu cliente</span>.
            </motion.p>

            {/* Benefits */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              {[
                { title: 'Monitoramento em Tempo Real', desc: 'Acompanhe todas as conversas simultaneamente' },
                { title: 'Qualidade de Atendimento', desc: 'Garanta os melhores padrões de excelência' },
                { title: 'Relatórios e Insights', desc: 'Dados acionáveis para decisões melhores' },
                { title: 'Treinamento Contínuo', desc: 'Identifique oportunidades de aprendizado' }
              ].map((benefit, index) => (
                <div key={index} className="group p-4 rounded-xl border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300 cursor-pointer hover:bg-primary-500/5">
                  <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              className="btn-primary mt-8"
            >
              <span className="flex items-center justify-center gap-2">
                Conhecer Supervisão
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
