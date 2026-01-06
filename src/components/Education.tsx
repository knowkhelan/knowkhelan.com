import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science – Computer Science',
    school: 'Georgia Institute of Technology',
    focus: 'Human-Computer Interaction, Artificial Intelligence',
    highlights: [
      'Graduate TA | CS 4605/7470 – Mobile & Ubiquitous Computing',
      'Research Assistant | Face Anonymization – Built Python tool to anonymize faces in Zoom via OBS virtual camera',
      'Research Assistant | AR Lab – Improved Mozilla Hubs virtual meetings through design evaluation',
    ],
  },
  {
    degree: 'Bachelor of Science – Computer Science',
    school: 'Georgia Institute of Technology',
    focus: 'Minor in Economics',
    highlights: [
      'Senior Vice President of Projects | Big Data Big Impact',
      'Product Manager | Bits of Good',
    ],
  },
];

export function Education() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-6">
          Education
        </h2>

        <div className="space-y-4 max-w-3xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-lg border border-border bg-card"
            >
              <div className="flex items-start gap-3 mb-2">
                <GraduationCap className="w-4 h-4 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-card-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{edu.focus}</p>
                </div>
              </div>

              <ul className="space-y-1 pl-7 mt-3">
                {edu.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
