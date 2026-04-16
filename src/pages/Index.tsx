import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecsSection from "@/components/SpecsSection";
import BuySection from "@/components/BuySection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpecsSection />
      <BuySection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
