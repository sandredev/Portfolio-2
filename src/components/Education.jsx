import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    title: 'Universidad del Magdalena',
    subtitle: 'Ingeniería de Sistemas',
    period: '2024 - presente',
    description: 'Cursando quinto semestre de la carrera.',
  },
  {
    icon: BookOpen,
    title: 'Instituto Tayrona',
    subtitle: 'Primaria y Bachillerato',
    period: '2013 - 2023',
    description: 'Formación académica básica y media.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Educación</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex gap-5 p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white break-words">{item.title}</h3>
                    <p className="text-sm sm:text-base text-primary font-medium">{item.subtitle}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap bg-white/5 px-2.5 sm:px-3 py-1 rounded-lg self-start">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
