import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Database, ShoppingCart } from 'lucide-react';

const experiences = [
  {
    id: 'microsoft',
    icon: Database,
    title: 'Founding PM – Azure DocumentDB',
    company: 'Microsoft',
    period: '2022 – Present',
    operator: {
      points: [
        'Defined product strategy from Public Preview to GA for billion-vector workloads',
        'Launched advanced full-text search and LLM-based Index Advisor, reducing support tickets by 40%',
        'Scaled Azure Vector Search to 103M+ monthly requests with 40% latency reduction',
      ],
    },
    strategist: {
      points: [
        'Led competitive diligence on vector vendors; recommended internal build over partnership',
        'Identified hybrid search as strategic workload; executed $2.1M ARR strategy in preview',
        'Secured long-term roadmap control and economics through build-vs-buy analysis',
      ],
    },
  },
  {
    id: 'walmart',
    icon: ShoppingCart,
    title: 'Software Engineer',
    company: 'Walmart eCommerce',
    period: '2021',
    operator: {
      points: [
        'Designed app using Sketch Framework for 50,000+ store associates',
        'Led development of eLabels app, streamlining tag assignment by 30%',
        'Created documentation enabling 15+ developers to cut installation time by 50%',
      ],
    },
    strategist: {
      points: [
        'Collaborated cross-functionally with UI/UX to drive associate productivity',
        'Delivered process efficiency gains measured at 30% improvement',
        'Established scalable architecture patterns adopted across team',
      ],
    },
  },
];

export function BentoGrid() {
  const { role, isOperator } = useRole();

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            const content = isOperator ? exp.operator : exp.strategist;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold text-card-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.ul
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5 pl-7"
                  >
                    {content.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
