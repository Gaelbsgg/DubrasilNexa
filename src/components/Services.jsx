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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const services = [
  {
    icon: '⚡',
    title: 'Profissionalizar seu atendimento',
    description: 'Organiza as conversas para que os clientes sejam atendidos de forma ágil e pela pessoa/setor mais adequado.',
    color: 'from-primary-500/20 to-primary-600/20'
  },
  {
    icon: '🤝',
    title: 'Atendimento humanizado',
    description: 'Atendimento acolhedor e natural, entendendo a necessidade do cliente e guiando a conversa de forma fluida.',
    color: 'from-accent-DEFAULT/20 to-emerald-600/20'
  },
  {
    icon: '📊',
    title: 'Coleta de informações',
    description: 'Coleta de informações e dados essenciais para decisões.',
    color: 'from-blue-500/20 to-cyan-600/20'
  },
]

export default function Services() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-b from-primary-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-white">O que </span>
            <span className="gradient-text">a Nexa</span>
            <span className="text-white"> faz</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Soluções completas para transformar seu atendimento em uma experiência premium
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-primary-500/50 bg-gradient-to-br ${service.color} backdrop-blur-xl transition-all duration-300 card-hover group`}
            >
              {/* Gradient background accent */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-r from-primary-500/30 to-accent-DEFAULT/30 pointer-events-none -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
