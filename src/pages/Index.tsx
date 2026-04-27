import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DemoSection from "@/components/DemoSection";
import UseCasesSection from "@/components/UseCasesSection";
import ExamplesSection from "@/components/ExamplesSection";
import ValueSection from "@/components/ValueSection";
import WaitlistSection from "@/components/WaitlistSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <UseCasesSection />
      <ExamplesSection />
      <ValueSection />
      <WaitlistSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
