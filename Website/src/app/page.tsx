import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import ROX from "@/components/ROX";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Platform />
      <ROX />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
