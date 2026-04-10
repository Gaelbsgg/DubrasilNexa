import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-dark-950 border-t border-gray-800/50 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-1/2 h-1/2 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary-400 to-accent-DEFAULT rounded-full"></div>
              <span className="font-extrabold text-lg text-white">NEXA</span>
            </div>
            <p className="text-sm text-gray-400">
              Tecnologia humanizada para atendimento de excelência.
            </p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: 'Produto',
              links: ['Recursos', 'Preços', 'Segurança', 'Roadmap']
            },
            {
              title: 'Empresa',
              links: ['Sobre', 'Blog', 'Carreiras', 'Contato']
            },
            {
              title: 'Legal',
              links: ['Privacidade', 'Termos', 'Cookies', 'LGPD']
            }
          ].map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-white text-sm">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} DuBrasil Nexa. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              {[
                { icon: 'f', label: 'Facebook' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: 'tw', label: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                  title={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" opacity="0.2" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
