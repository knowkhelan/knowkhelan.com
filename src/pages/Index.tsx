import { RoleProvider } from '@/contexts/RoleContext';
import { RoleToggle } from '@/components/RoleToggle';
import { HeroSection } from '@/components/HeroSection';
import { BentoGrid } from '@/components/BentoGrid';
import { Education } from '@/components/Education';
import { BuildersLab } from '@/components/BuildersLab';
import { ThoughtLeadership } from '@/components/ThoughtLeadership';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <RoleProvider>
      <div className="min-h-screen bg-background">
        <RoleToggle />
        <HeroSection />
        <BentoGrid />
        <Education />
        <BuildersLab />
        <ThoughtLeadership />
        <Footer />
      </div>
    </RoleProvider>
  );
};

export default Index;
