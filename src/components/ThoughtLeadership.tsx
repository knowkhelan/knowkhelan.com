import { motion } from 'framer-motion';
import { Mic, PenTool, Calendar, ExternalLink } from 'lucide-react';

const speaking = [
  { event: 'FabCon 2024', topic: 'Building Vector Search at Scale' },
  { event: 'AI Tour', topic: 'GenAI Infrastructure Patterns' },
  { event: 'Microsoft Build 2025', topic: 'Developer Tooling for AI' },
];

const writing = [
  {
    title: 'Product Quantization with DiskANN',
    description: 'SEO Strategy deep-dive on optimizing vector search performance',
    link: '#',
  },
];

export function ThoughtLeadership() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wide text-accent bg-accent/10 mb-4">
            INSIGHTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Thought Leadership
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Speaking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 card-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl accent-gradient">
                <Mic className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                Speaking
              </h3>
            </div>

            <div className="space-y-4">
              {speaking.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <Calendar className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                      {item.event}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.topic}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Writing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 card-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl accent-gradient">
                <PenTool className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                Writing
              </h3>
            </div>

            <div className="space-y-4">
              {writing.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="block p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {article.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional placeholder */}
            <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-border text-center">
              <p className="text-muted-foreground text-sm">More articles coming soon...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
