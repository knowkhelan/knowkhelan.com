import { motion } from 'framer-motion';
import { Inbox, Newspaper, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Inbox,
    title: 'Inbox-to-Notion',
    tagline: 'Turn scattered messages into real tasks',
    description: 'Pulls one-line work items from Slack, Outlook, Teams, and WhatsApp, enriches them with AI-generated titles, descriptions, and priorities, and syncs everything into a single Notion task hub.',
    highlights: [
      'Stay focused—no context switching to update a To-Do list',
      'Never forget—AI handles the formatting instantly',
      'Centralized hub with AI-generated priorities',
    ],
  },
  {
    icon: Newspaper,
    title: 'AI & Tech News Scraper',
    tagline: 'Daily AI news straight to WhatsApp',
    description: 'A Python web scraper that sends daily AI and tech news updates directly to your WhatsApp. Scrapes TechCrunch, MIT Tech Review, The Verge, and more.',
    highlights: [
      'RSS feed parsing for reliable extraction',
      'WhatsApp delivery via Twilio API',
      'Daily automated updates with local archiving',
    ],
  },
];

export function BuildersLab() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          Side Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.tagline}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
