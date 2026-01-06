import { motion } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';

export function RoleToggle() {
  const { role, toggleRole, isOperator } = useRole();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card border border-border rounded-full p-1 shadow-sm">
        <div className="relative flex items-center">
          <motion.div
            className="absolute inset-y-0.5 rounded-full bg-primary"
            initial={false}
            animate={{
              left: isOperator ? 2 : '50%',
              right: isOperator ? '50%' : 2,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />

          <button
            onClick={() => !isOperator && toggleRole()}
            className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              isOperator ? 'text-primary-foreground' : 'text-muted-foreground'
            }`}
          >
            Product
          </button>

          <button
            onClick={() => isOperator && toggleRole()}
            className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !isOperator ? 'text-primary-foreground' : 'text-muted-foreground'
            }`}
          >
            Strategy
          </button>
        </div>
      </div>
    </div>
  );
}
