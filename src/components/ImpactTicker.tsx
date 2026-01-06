import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';

const metrics = {
  operator: [
    { value: '103.4M', label: 'Monthly Requests' },
    { value: '40%', label: 'Latency Reduction' },
    { value: '5,000+', label: 'VS Code DAU' },
    { value: '11x', label: 'RPS vs MongoDB' },
  ],
  strategist: [
    { value: 'Build-vs-Buy', label: 'Thesis Validation' },
    { value: '$175K/mo', label: 'New Revenue' },
    { value: '48%', label: 'Revenue Uplift' },
    { value: 'Category Lead', label: 'Positioning' },
  ],
};

export function ImpactTicker() {
  const { role, isOperator } = useRole();
  const currentMetrics = isOperator ? metrics.operator : metrics.strategist;

  return (
    <section className="py-6 border-b border-border">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {currentMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-display text-xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
