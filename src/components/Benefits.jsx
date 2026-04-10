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

const benefits = [
  {
    icon: '⚡',
    title: 'Agilidade no atendimento',
    description: 'Pacientes não ficam aguardando por respostas.',
    color: 'from-primary-500/20 to-primary-600/20'
  },
  {
    icon: '💬',
    title: 'Comunicação organizada',
    description: 'Comunicação mais rápida e organizada.',
    color: 'from-accent-DEFAULT/20 to-emerald-600/20'
  },
  {
    icon: '✨',
    title: 'Melhor experiência',
    description: 'Melhoria da experiência desde o primeiro contato.',
    color: 'from-blue-500/20 to-cyan-600/20'
  },
]

export default function Benefits() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 right-0 w-1/2 h-1/2 bg-accent-DEFAULT/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 space-y-4 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="gradient-text">Benefícios Diretos</span>
            <span className="text-white"> que você sente</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Resultados mensuráveis desde o primeiro dia
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-primary-500/50 bg-gradient-to-br ${benefit.color} backdrop-blur-xl transition-all duration-300 group cursor-pointer`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-primary-400 to-accent-DEFAULT bg-clip-text">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Redução de tempo', value: '70%' },
            { label: 'Satisfação do cliente', value: '+85%' },
            { label: 'Eficiência operacional', value: '+60%' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-gray-800 hover:border-primary-500/50 transition-colors">
              <p className="text-5xl md:text-6xl font-extrabold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
