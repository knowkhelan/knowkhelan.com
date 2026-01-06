import { motion } from 'framer-motion';
import { Mic, PenTool } from 'lucide-react';

const speaking = [
  { event: 'FabCon 2024', topic: 'Building Vector Search at Scale' },
  { event: 'AI Tour', topic: 'GenAI Infrastructure Patterns' },
  { event: 'Microsoft Build 2025', topic: 'Developer Tooling for AI' },
];

export function ThoughtLeadership() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          Speaking & Writing
        </h2>

        <div className="max-w-4xl grid md:grid-cols-2 gap-6">
          {/* Speaking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-card-foreground">Speaking</h3>
            </div>

            <ul className="space-y-3">
              {speaking.map((item) => (
                <li key={item.event} className="text-sm">
                  <span className="font-medium text-card-foreground">{item.event}</span>
                  <span className="text-muted-foreground"> — {item.topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Writing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <PenTool className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-card-foreground">Writing</h3>
            </div>

            <a href="#" className="block text-sm group">
              <span className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                Product Quantization with DiskANN
              </span>
              <p className="text-muted-foreground mt-1">
                Deep-dive on optimizing vector search performance
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
