import { AboutSection } from "@/components/About";
import ApproachSection from "@/components/Approach";
import FeaturedWorkSection from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/Insights";
import SpecialisationsSection from "@/components/Specialisation";
import WhatWeDoSection from "@/components/WhatWeDo";
import WorkPage from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ApproachSection />
      {/*<WhatWeDoSection />*/}
      <AboutSection />
      {/*<SpecialisationsSection />*/}
      <FeaturedWorkSection />
      {/*<InsightsSection />*/}
      <WorkPage />
      <Footer />
    </>
  );
}
