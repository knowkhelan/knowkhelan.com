import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Database, ShoppingCart } from 'lucide-react';

interface ExperienceSection {
  title: string;
  points: string[];
}

interface Experience {
  id: string;
  icon: typeof Database;
  title: string;
  company: string;
  period: string;
  description?: string;
  operator: {
    sections?: ExperienceSection[];
    points?: string[];
  };
  strategist: {
    sections?: ExperienceSection[];
    points?: string[];
  };
}

const experiences: Experience[] = [
  {
    id: 'microsoft',
    icon: Database,
    title: 'Founding PM – Azure DocumentDB',
    company: 'Microsoft',
    period: '2022 – Present',
    description: 'Leading developer tooling and GenAI capabilities for Azure DocumentDB (formerly vCore-based Azure Cosmos DB for MongoDB) and the open-source DocumentDB ecosystem. Responsible for product strategy, roadmap execution, and GTM across AI workloads, vector search, and indexing at enterprise scale.',
    operator: {
      sections: [
        {
          title: 'AI & Search Systems',
          points: [
            'Scaled vector search from 1M → 100M+ monthly requests by driving a customer-driven roadmap from Public Preview to GA',
            'Benchmarked against competitors (MongoDB), achieving 11× higher RPS and 14× lower latency',
            'Launched full-text search revenue stream via OSS-based approach, generating ~$175K/month in Preview',
            'Built the first LLM-based Index Advisor, reducing support load and boosting customer retention',
          ],
        },
        {
          title: 'Developer Tooling (VS Code & Azure Portal)',
          points: [
            'PM owner for DocumentDB for VS Code—led 0→1 development across data visualization, migration tooling, and LLM-powered insights',
            'Delivered Azure Portal enhancements with one-click activation for 10+ preview features',
          ],
        },
        {
          title: 'Go-to-Market & Evangelism',
          points: [
            'Owned end-to-end GTM for AI and developer features including positioning, launch strategy, and documentation',
            'Delivered technical deep dives at 15+ conferences (FabCon, AI Tour, Build 2025) and YouTube (10K+ views)',
            'Drove 18% increase in documentation traffic through SEO-optimized content',
          ],
        },
      ],
    },
    strategist: {
      sections: [
        {
          title: 'Strategic Positioning',
          points: [
            'Led competitive diligence on vector vendors; recommended internal build over partnership for long-term roadmap control',
            'Positioned DocumentDB as category-leading vector database through rigorous benchmarking',
            'Identified hybrid search as strategic workload; executed strategy generating $2.1M ARR in preview',
          ],
        },
        {
          title: 'Capital Allocation & Build-vs-Buy',
          points: [
            'Evaluated commercial licensing vs. OSS build for full-text search capability',
            'Drove build decision securing favorable economics and roadmap independence',
          ],
        },
        {
          title: 'GTM Strategy',
          points: [
            'Defined positioning and launch strategy for AI workloads targeting enterprise customers',
            'Built developer evangelism program across conferences, content, and direct customer engagement',
          ],
        },
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

                {exp.description && (
                  <p className="text-sm text-muted-foreground mb-4 pl-7">
                    {exp.description}
                  </p>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-7"
                  >
                    {content.sections ? (
                      <div className="space-y-4">
                        {content.sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm font-medium text-card-foreground mb-1.5">
                              {section.title}
                            </h4>
                            <ul className="space-y-1">
                              {section.points.map((point, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                  <span className="text-accent shrink-0">•</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1.5">
                        {content.points?.map((point, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent shrink-0">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
