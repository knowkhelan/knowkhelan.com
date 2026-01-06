import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Linkedin, Github, Mail } from 'lucide-react';

const heroContent = {
  operator: {
    headline: "Scaling High-Performance GenAI Infrastructure.",
    subhead: "Founding PM at Microsoft. Scaled Azure Vector Search to 103M+ monthly requests.",
  },
  strategist: {
    headline: "Capital Allocation & Technical Diligence for AI.",
    subhead: "Expert in Build-vs-Buy analysis and Long-term GenAI Strategy.",
  },
};

export function HeroSection() {
  const { role, isOperator } = useRole();
  const content = isOperator ? heroContent.operator : heroContent.strategist;

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-primary pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-xs font-medium tracking-widest text-primary-foreground/60 mb-4"
          >
            KHELAN MODI
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.h1
              key={role + '-headline'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-3"
            >
              {content.headline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={role + '-subhead'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-base text-primary-foreground/70 max-w-lg mx-auto mb-6"
            >
              {content.subhead}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3">
            {[
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-full text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
