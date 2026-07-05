import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Certificates } from "@/components/sections/Certificates";
import { Vision, Mission } from "@/components/sections/VisionMission";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BehindTheScenes } from "@/components/sections/BehindTheScenes";
import { Equipment } from "@/components/sections/Equipment";
import { Team } from "@/components/sections/Team";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { CompanyTimeline } from "@/components/sections/CompanyTimeline";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Certificates />
      <Vision />
      <Mission />
      <WhyChooseUs />
      <Services />
      <Projects />
      <CaseStudies />
      <BehindTheScenes />
      <Equipment />
      <Team />
      <Clients />
      <Testimonials />
      <CompanyTimeline />
      <Awards />
      <Contact />
    </>
  );
}
