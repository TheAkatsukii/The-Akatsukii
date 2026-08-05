import ApproachSection from "@/components/Approach";
import ContactSection from "@/components/Contact";
import FeaturedWorkSection from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/Insights";
import SpecialisationsSection from "@/components/Specialisation";
import WhatWeDoSection from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ApproachSection />
      <WhatWeDoSection />
      <SpecialisationsSection />
      <FeaturedWorkSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
