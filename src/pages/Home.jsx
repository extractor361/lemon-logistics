import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import BrandStatement from "@/components/home/BrandStatement";
import CoreValues from "@/components/home/CoreValues";
import Process from "@/components/home/Process";
import SupportCTA from "@/components/home/SupportCTA";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <BrandStatement />
      <CoreValues />
      <Process />
      <SupportCTA />
      <FinalCTA />
    </>
  );
}