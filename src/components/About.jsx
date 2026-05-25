import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Target, Brain } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    label: 'Desarrollo Web',
    desc: 'React, TailwindCSS, NodeJS, Express',
  },
  {
    icon: Brain,
    label: 'ML & Deep Learning',
    desc: 'Aprendiendo y profundizando constantemente',
  },
  {
    icon: Target,
    label: 'Backend',
    desc: 'Enfoque principal con Python y Django',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-primary">mí</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Santiago es un apasionado estudiante de{' '}
              <span className="text-white font-semibold">Ingeniería de Sistemas</span> en la
              Universidad del Magdalena, dedicado a la programación y amante de los retos
              mentalmente exigentes.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Se caracteriza por su buen rendimiento en entornos desafiantes,{' '}
              <span className="text-white font-semibold">liderazgo</span> y eficiente
              manejo del tiempo y los recursos. Visualiza cada fallo como una oportunidad
              de aprendizaje.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Sus metas a largo plazo son convertirse en un programador{' '}
              <span className="text-white font-semibold">backend</span> especializado en{' '}
              <span className="text-white font-semibold">Machine Learning</span> y
              desarrollar sistemas de aprendizaje automático eficientes que respondan a
              problemáticas actuales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
