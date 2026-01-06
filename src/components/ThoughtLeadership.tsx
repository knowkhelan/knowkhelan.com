import { motion } from 'framer-motion';
import { Mic, PenTool } from 'lucide-react';

const speaking = [
  { event: 'FabCon 2024', topic: 'Building Vector Search at Scale' },
  { event: 'AI Tour', topic: 'GenAI Infrastructure Patterns' },
  { event: 'Microsoft Build 2025', topic: 'Developer Tooling for AI' },
];

export function ThoughtLeadership() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Speaking & Writing
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <Mic className="w-4 h-4 text-accent" />
              <h3 className="font-display font-semibold text-card-foreground text-sm">Speaking</h3>
            </div>

            <ul className="space-y-2">
              {speaking.map((item) => (
                <li key={item.event} className="text-sm">
                  <span className="font-medium text-card-foreground">{item.event}</span>
                  <span className="text-muted-foreground"> — {item.topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <PenTool className="w-4 h-4 text-accent" />
              <h3 className="font-display font-semibold text-card-foreground text-sm">Writing</h3>
            </div>

            <div className="space-y-3">
              <a href="https://devblogs.microsoft.com/cosmosdb/introducing-index-advisor-for-azure-documentdb-preview/" target="_blank" rel="noopener noreferrer" className="block text-sm group">
                <span className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                  Introducing Index Advisor for Azure DocumentDB
                </span>
                <p className="text-muted-foreground text-xs mt-1">
                  Microsoft DevBlogs
                </p>
              </a>

              <a href="#" className="block text-sm group">
                <span className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                  Product Quantization with DiskANN
                </span>
                <p className="text-muted-foreground text-xs mt-1">
                  Optimizing vector search performance
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
