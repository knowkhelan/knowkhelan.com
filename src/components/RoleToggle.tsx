import { motion } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Code, TrendingUp } from 'lucide-react';

export function RoleToggle() {
  const { role, toggleRole, isOperator } = useRole();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-effect rounded-full p-1.5 card-shadow border border-border/50"
      >
        <div className="relative flex items-center">
          {/* Sliding background */}
          <motion.div
            className="absolute inset-y-1 rounded-full accent-gradient"
            initial={false}
            animate={{
              left: isOperator ? 4 : '50%',
              right: isOperator ? '50%' : 4,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />

          {/* Operator Button */}
          <button
            onClick={() => !isOperator && toggleRole()}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-sm font-medium transition-colors duration-300 ${
              isOperator ? 'text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Operator / Builder</span>
          </button>

          {/* Strategist Button */}
          <button
            onClick={() => isOperator && toggleRole()}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-sm font-medium transition-colors duration-300 ${
              !isOperator ? 'text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Strategist / Investor</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
