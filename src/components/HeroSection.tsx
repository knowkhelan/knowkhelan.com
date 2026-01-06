import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Linkedin, Github, Mail } from 'lucide-react';
import profileImage from '@/assets/khelan-profile.jpeg';

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
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <img
              src={profileImage}
              alt="Khelan Modi"
              className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-primary-foreground/20"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4"
          >
            Khelan Modi
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.h1
              key={role + '-headline'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-primary-foreground/90 leading-tight mb-3"
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
              className="text-sm text-primary-foreground/60 max-w-lg mx-auto mb-6"
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
