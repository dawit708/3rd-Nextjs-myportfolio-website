import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { CurrentlyWorking } from "@/components/sections/CurrentlyWorking";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { WhatsDoing } from "@/components/sections/WhatsDoing";
import { MyServices } from "@/components/sections/MyServices";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Journey } from "@/components/sections/Journey";
import { HireMe } from "@/components/sections/HireMe";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <TechMarquee />
      <CurrentlyWorking />
      <About />
      <Stats />
      <TechStack />
      <WhatsDoing />
      <MyServices />
      <WhatIBring />
      <Projects />
      <Testimonials />
      <Journey />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}