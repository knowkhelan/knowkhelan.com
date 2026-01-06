import { motion } from 'framer-motion';
import { Inbox, Newspaper } from 'lucide-react';

const projects = [
  {
    icon: Inbox,
    title: 'Inbox-to-Notion',
    description: 'Pulls tasks from Slack, Outlook, Teams, WhatsApp → enriches with AI titles/priorities → syncs to Notion.',
    highlights: ['No context switching', 'AI formatting', 'Centralized hub'],
  },
  {
    icon: Newspaper,
    title: 'AI & Tech News Scraper',
    description: 'Python scraper sending daily AI news to WhatsApp via Twilio. Sources: TechCrunch, MIT Tech Review, The Verge.',
    highlights: ['RSS parsing', 'WhatsApp delivery', 'Auto-archiving'],
  },
];

export function BuildersLab() {
  return (
    <section className="py-10 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Side Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-card-foreground text-sm">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
