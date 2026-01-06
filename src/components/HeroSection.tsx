import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';

const heroContent = {
  operator: {
    headline: "Scaling High-Performance GenAI Infrastructure.",
    subhead: "Founding PM at Microsoft. Scaled Azure Vector Search to 103M+ monthly requests. Specialist in Developer Tooling & Search Systems.",
  },
  strategist: {
    headline: "Capital Allocation & Technical Diligence for AI.",
    subhead: "Bridging the gap between code and capital. Expert in Build-vs-Buy analysis, Ecosystem Partnerships, and Long-term GenAI Strategy.",
  },
};

export function HeroSection() {
  const { role, isOperator } = useRole();
  const content = isOperator ? heroContent.operator : heroContent.strategist;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'var(--gradient-accent)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'var(--gradient-accent)' }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wide text-primary-foreground/70 border border-primary-foreground/20 mb-8">
              KHELAN MODI
            </span>
          </motion.div>

          {/* Dynamic Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={role + '-headline'}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              {content.headline}
            </motion.h1>
          </AnimatePresence>

          {/* Dynamic Subhead */}
          <AnimatePresence mode="wait">
            <motion.p
              key={role + '-subhead'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {content.subhead}
            </motion.p>
          </AnimatePresence>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-foreground/50"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
