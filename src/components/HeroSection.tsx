import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Linkedin, Github, Twitter, FileText } from 'lucide-react';
import profileImage from '@/assets/khelan-profile.jpeg';
import { FloatingWords } from './FloatingWords';

const heroContent = {
  operator: {
    headline: "Builder at Heart. PM by Trade.",
    subhead: "Founding PM at Microsoft, shipping GenAI and developer tools used by millions.",
  },
  strategist: {
    headline: "Builder at Heart. Strategist by Instinct.",
    subhead: "Bridging code and capital through technical diligence and long-term AI strategy.",
  },
};

export function HeroSection() {
  const { role, isOperator } = useRole();
  const content = isOperator ? heroContent.operator : heroContent.strategist;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-primary pt-20 pb-12 overflow-hidden">
      <FloatingWords />
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
              className="w-36 h-36 rounded-full mx-auto object-cover border-2 border-primary-foreground/20"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4"
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
              className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-primary-foreground/90 leading-tight mb-3"
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
              className="text-base text-primary-foreground/60 max-w-lg mx-auto mb-6"
            >
              {content.subhead}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/khelan-modi', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/knowkhelan', label: 'GitHub' },
              { icon: Twitter, href: 'https://x.com/knowkhelan', label: 'X' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <a
              href={isOperator ? "/Khelan_Modi_Resume.pdf" : "/Khelan_Modi_Resume_CS.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
