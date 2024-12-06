import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { MissionVision } from "@/components/MissionVision";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <MissionVision />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;