import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const differentials = [
  { icon: '🎯', label: 'Funis de oportunidades' },
  { icon: '✅', label: 'Gestão de tarefas' },
  { icon: '⚙️', label: 'Automações' },
  { icon: '💳', label: 'Meios de pagamento' },
  { icon: '🔗', label: 'Integrações' },
]

export default function Differentials() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-dark-950 to-dark-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-accent-DEFAULT/15 to-transparent rounded-full blur-3xl"></div>
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
            <span className="text-white">E muito</span>
            <br />
            <span className="gradient-text">mais</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Recursos avançados para potencializar seu negócio
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-DEFAULT/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl border border-gray-800 group-hover:border-primary-500/50 bg-dark-900/50 backdrop-blur-xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer">
                <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
                <p className="text-sm md:text-base font-medium text-white group-hover:text-primary-400 transition-colors">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
