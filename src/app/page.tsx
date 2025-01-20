"use client"

import { ChiSonoSection } from "./components/chisono_section";
import { CosaFaccioSection } from "./components/cosafaccio_section";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { LeMieSkillsSection } from "./components/lemieskills_section";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="dark:bg-[#232424] bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ChiSonoSection />
      <CosaFaccioSection />
      <LeMieSkillsSection />
      <Footer />
    </main>
  );
}