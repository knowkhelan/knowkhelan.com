import { motion } from 'framer-motion';
import { useMemo } from 'react';

const words = [
  'GenAI', 'Vector Search', 'Product Strategy', 'Developer Tools',
  'VS Code', 'Azure', 'LLM', 'Full-Text Search', 'GTM',
  'Build-vs-Buy', 'DiskANN', 'Python', 'React', '0-1',
  'Georgia Tech', 'AI/ML', 'Product Roadmap', 'OSS',
  'Index Advisor', 'Enterprise', 'Scaling', 'HCI', 'Competitive Analysis',
];

interface FloatingWord {
  word: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingWords() {
  const floatingWords = useMemo<FloatingWord[]>(() => {
    return words.map((word, i) => ({
      word,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.7 + Math.random() * 0.5,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingWords.map((item, i) => (
        <motion.span
          key={i}
          className="absolute font-display font-medium text-primary-foreground/[0.08] whitespace-nowrap select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}rem`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 15, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}
