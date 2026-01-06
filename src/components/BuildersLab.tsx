import { motion } from 'framer-motion';
import { Code2, Sparkles, Play } from 'lucide-react';

export function BuildersLab() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wide text-accent bg-accent/10 mb-4">
            THE LAB
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Builder's Lab
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl accent-gradient">
                  <Code2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Vibe Coding & Experiments
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I prototype to understand the edge of possibility. Each experiment is a proof point—a way to validate technical feasibility before committing resources.
              </p>

              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="font-display font-medium">Recent Builds & Side Projects</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Vector Search Playground', tech: 'Python, FAISS, Streamlit' },
                  { name: 'LLM Index Advisor', tech: 'TypeScript, OpenAI API' },
                  { name: 'Supply Chain Optimizer', tech: 'React, D3.js, Python' },
                ].map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-card card-shadow"
                  >
                    <span className="font-medium text-card-foreground">{project.name}</span>
                    <span className="text-sm text-muted-foreground">{project.tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Video placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden card-shadow bg-primary"
            >
              {/* Video placeholder with gradient */}
              <div className="absolute inset-0 hero-gradient flex items-center justify-center">
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-4 group"
                  >
                    <Play className="w-8 h-8 text-primary-foreground group-hover:text-accent transition-colors" />
                  </motion.button>
                  <p className="text-primary-foreground/70 text-sm">
                    Watch the latest build
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary to-transparent">
                <p className="text-primary-foreground/90 text-sm font-medium">
                  Recent Build: Vector Search Playground
                </p>
                <p className="text-primary-foreground/60 text-xs">
                  Built with Python, FAISS, Streamlit
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
