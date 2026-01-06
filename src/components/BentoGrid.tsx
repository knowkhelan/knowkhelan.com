import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Database, Search } from 'lucide-react';

const projects = [
  {
    id: 'azure-documentdb',
    icon: Database,
    title: 'Azure DocumentDB (GenAI)',
    operator: {
      description: 'Defined product strategy from Public Preview to GA. Prioritized features via customer telemetry to handle billion-vector workloads.',
    },
    strategist: {
      description: 'Led competitive diligence on vector vendors. Recommended internal build over partnership to secure long-term roadmap control and economics.',
    },
  },
  {
    id: 'search-revenue',
    icon: Search,
    title: 'Search Revenue Stream',
    operator: {
      description: 'Launched advanced full-text search. Built the first LLM-based Index Advisor reducing support tickets by 40%.',
    },
    strategist: {
      description: 'Identified hybrid search as a strategic workload. Executed strategy generating ~$2.1M annualized run rate in preview.',
    },
  },
];

export function BentoGrid() {
  const { role, isOperator } = useRole();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          Work
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project) => {
            const Icon = project.icon;
            const content = isOperator ? project.operator : project.strategist;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-card-foreground">
                    {project.title}
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {content.description}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
