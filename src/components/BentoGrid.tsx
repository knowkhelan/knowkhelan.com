import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Database, ShoppingCart, ChevronDown, Brain } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';

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
  url?: string;
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
    title: 'Senior Product Manager – Azure Cosmos DB',
    company: 'Microsoft',
    period: '2023 – Present',
    description: 'Senior PM on Azure Cosmos DB since August 2026, owning product strategy for Microsoft-Embedding-1, a multimodal embedding model. Previously PM 1 & 2 on Azure DocumentDB (July 2023 – July 2026), where I led search, AI, and developer tooling from preview to scale.',
    operator: {
      sections: [
        {
          title: 'AI Model Quality & Evaluation',
          points: [
            'Own product strategy for Microsoft-Embedding-1, a multimodal embedding model; established retrieval evaluation across all 15 BEIR tasks and ViDoRe V3 (66.24, #1 on the leaderboard)',
            'Partner with AI researchers and engineers on retrieval quality, throughput, p50/p90 latency, and token efficiency to shape training priorities, pricing, and go-to-market',
            'Led 0→1 development of an AI-powered Index Advisor, built on an evaluation set of anonymized customer query patterns',
            'Positioned DocumentDB as the native data tier for agentic apps with an MCP server and toolkit, plus LangChain, LangGraph, LlamaIndex, and Semantic Kernel integrations',
          ],
        },
        {
          title: 'Search & Retrieval Systems',
          points: [
            'Grew vector search from 1M → 150M+ monthly requests',
            'Used production telemetry to target indexing and retrieval bottlenecks, delivering 11× higher throughput and 14× lower latency in competitive benchmarks',
            'Launched full-text search 0→1 (BM25, fuzzy matching, compound queries), removing the need for separate search clusters and generating ~$500K/month in preview revenue',
          ],
        },
        {
          title: 'Customer Impact & Go-to-Market',
          points: [
            'Led enterprise search migrations from Cassandra + Solr and MongoDB Atlas Search to DocumentDB full-text search',
            'Partnered with KPMG Australia on KymChat, a GenAI app serving 7,000+ employees, improving retrieval accuracy from 50% to 90%+',
            'Led GTM across Sales, Marketing, and Engineering: 15+ conference talks, 18% docs traffic growth, and a VS Code extension at 10K+ DAUs (NPS 45); mentored 3 new PMs',
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
    id: 'mentaltabs',
    icon: Brain,
    title: 'Co-Founder',
    company: 'MentalTabs',
    period: 'Oct 2025 – Apr 2026',
    url: 'https://mentaltabs.co/',
    description: 'MentalTabs was an AI-powered capture tool that let people dump raw thoughts from the apps they already use (WhatsApp, Slack, and Email) and turned them into organized actions and reflections in Notion. We reached 25 paying customers, then chose to wind it down based on competitive dynamics and product differentiation.',
    operator: {
      points: [
        'Built an AI-powered productivity SaaS integrating WhatsApp, Slack, Email, and Notion',
        'Owned product strategy, customer discovery, and 0→1 development',
        'Acquired 25 paying customers before deciding to discontinue based on competitive dynamics and differentiation',
      ],
    },
    strategist: {
      points: [
        'Identified market gap in thought capture and mental organization tools',
        'Designed product strategy around reducing friction in existing workflows',
        'Positioned MentalTabs as solution for context-switching productivity drain',
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

function ExperienceCard({ exp }: { exp: Experience }) {
  const { role, isOperator } = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const content = isOperator ? exp.operator : exp.strategist;
  const Icon = exp.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border bg-card overflow-hidden"
      >
        <CollapsibleTrigger className="w-full p-5 text-left hover:bg-secondary/30 transition-colors">
          <div className="flex items-start gap-3">
            <Icon className="w-4 h-4 text-accent mt-1 shrink-0" />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-card-foreground">
                  {exp.title}
                </h3>
                <span className="text-xs text-muted-foreground">{exp.period}</span>
              </div>
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {exp.company}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              )}
            </div>
            <ChevronDown 
              className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-5 pb-5 pt-2">
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
          </div>
        </CollapsibleContent>
      </motion.div>
    </Collapsible>
  );
}

export function BentoGrid() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
