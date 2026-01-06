import { motion, AnimatePresence } from 'framer-motion';
import { useRole } from '@/contexts/RoleContext';
import { Zap, Clock, Users, BarChart3, CheckCircle, DollarSign, TrendingUp, Award } from 'lucide-react';

const metrics = {
  operator: [
    { icon: Zap, value: '103.4M', label: 'Monthly Requests Scaled' },
    { icon: Clock, value: '40%', label: 'Latency Reduction' },
    { icon: Users, value: '5,000+', label: 'DAU on VS Code Extension' },
    { icon: BarChart3, value: '11x', label: 'Higher RPS vs MongoDB' },
  ],
  strategist: [
    { icon: CheckCircle, value: 'Build-vs-Buy', label: 'Thesis Validation' },
    { icon: DollarSign, value: '$175K/mo', label: 'New Revenue Stream (Preview)' },
    { icon: TrendingUp, value: '48%', label: 'Client Revenue Uplift (AgroGate)' },
    { icon: Award, value: 'Category Lead', label: 'Market Positioning' },
  ],
};

function MetricCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 px-8 py-4 shrink-0">
      <div className="p-2 rounded-lg accent-gradient">
        <Icon className="w-5 h-5 text-accent-foreground" />
      </div>
      <div>
        <div className="font-display text-2xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  );
}

export function ImpactTicker() {
  const { role, isOperator } = useRole();
  const currentMetrics = isOperator ? metrics.operator : metrics.strategist;

  return (
    <section className="py-8 bg-secondary/50 border-y border-border overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Scrolling container */}
          <div className="flex animate-ticker-scroll">
            {/* First set */}
            <div className="flex shrink-0">
              {currentMetrics.map((metric, i) => (
                <MetricCard key={i} {...metric} />
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0">
              {currentMetrics.map((metric, i) => (
                <MetricCard key={`dup-${i}`} {...metric} />
              ))}
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex shrink-0">
              {currentMetrics.map((metric, i) => (
                <MetricCard key={`dup2-${i}`} {...metric} />
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
