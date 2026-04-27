import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MessagingSection from "@/components/MessagingSection";
import ProblemSection from "@/components/ProblemSection";
import DemoSection from "@/components/DemoSection";
import AskVeetoSection from "@/components/AskVeetoSection";
import UseCasesSection from "@/components/UseCasesSection";
import ValueSection from "@/components/ValueSection";
import WaitlistSection from "@/components/WaitlistSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen band-cream relative page-grain">
      <Navbar />
      <HeroSection />
      <MessagingSection />
      <ProblemSection />
      <DemoSection />
      <AskVeetoSection />
      <UseCasesSection />
      <ValueSection />
      <WaitlistSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
