import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { ExternalLink, Database, Search, Sprout } from 'lucide-react';

const projects = [
  {
    id: 'azure-documentdb',
    icon: Database,
    title: 'Azure DocumentDB (GenAI)',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    operator: {
      description: 'Defined product strategy from Public Preview to GA. Prioritized features via customer telemetry to handle billion-vector workloads.',
      tags: ['Product Strategy', 'Vector Search', 'GA Launch'],
    },
    strategist: {
      description: 'Led competitive diligence on vector vendors. Recommended internal build over partnership to secure long-term roadmap control and economics.',
      tags: ['Competitive Analysis', 'Build vs Buy', 'Strategic Planning'],
    },
  },
  {
    id: 'search-revenue',
    icon: Search,
    title: 'Search Revenue Stream',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    operator: {
      description: 'Launched advanced full-text search. Built the first LLM-based Index Advisor reducing support tickets by 40%.',
      tags: ['Full-Text Search', 'LLM Integration', 'Developer Tools'],
    },
    strategist: {
      description: 'Identified hybrid search as a strategic workload. Evaluated commercial licensing vs. OSS build; executed strategy generating ~$2.1M annualized run rate in preview.',
      tags: ['Revenue Strategy', 'Market Analysis', '$2.1M ARR'],
    },
  },
  {
    id: 'agrogate',
    icon: Sprout,
    title: 'AgroGate (Startup)',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    operator: {
      description: '0-to-1 Product Build. Designed supply chain optimization framework reducing intermediaries from 13 to 5.',
      tags: ['0-to-1', 'Supply Chain', 'Product Design'],
    },
    strategist: {
      description: 'Founder/CEO. Modeled unit economics and incentives to increase adoption by 20% in underserved markets.',
      tags: ['Founder/CEO', 'Unit Economics', '20% Growth'],
    },
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { role, isOperator } = useRole();
  const content = isOperator ? project.operator : project.strategist;
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-500 ${
        index === 0 ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-48'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-4 left-4 p-3 rounded-xl glass-effect border border-border/50">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-xl font-semibold text-card-foreground">
            {project.title}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {content.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function BentoGrid() {
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
            PORTFOLIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
