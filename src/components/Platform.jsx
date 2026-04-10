import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const platforms = [
  { icon: '💬', name: 'WhatsApp', status: 'Nativo' },
  { icon: '🤖', name: 'Agentes IA', status: 'Avançado' },
  { icon: '⚙️', name: 'Automações', status: 'Personalizadas' },
  { icon: '🔗', name: 'Integrações', status: 'Ilimitadas' },
]

export default function Platform() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent-DEFAULT/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 space-y-6 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Plataforma
            <br />
            <span className="gradient-text">Multicanal</span>
          </h2>
          <p className="text-lg text-gray-300">
            Plataforma multicanais com foco em <span className="text-primary-400 font-semibold">WhatsApp, agentes de IA, automações de fluxos</span> e <span className="text-accent-DEFAULT font-semibold">integração entre Atendimento, CRM e ERP</span> — sem abrir mão do humanizado.
          </p>
        </motion.div>

        {/* Platform components */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 md:p-8 rounded-2xl border border-gray-800 group-hover:border-primary-500/50 bg-dark-900/50 backdrop-blur-xl transition-all duration-300">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-white mb-1">{platform.name}</h3>
                <p className="text-sm text-primary-400">{platform.status}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-gray-800 bg-gradient-to-br from-dark-900/50 to-dark-950/50 backdrop-blur-xl p-8 md:p-16 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Integração Completa
            </h3>

            {/* Integration flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {['Atendimento', 'CRM', 'ERP', 'Análise'].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/30 text-white font-semibold whitespace-nowrap">
                    {item}
                  </div>
                  {index < 3 && (
                    <svg className="w-5 h-5 text-primary-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-300">
              Conecte todos os seus sistemas e crie uma visão <span className="text-primary-400 font-semibold">360° do cliente</span>, garantindo uma experiência integrada e humanizada em cada ponto de contato.
            </p>

            <button className="btn-primary">
              Explorar Integrações
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
