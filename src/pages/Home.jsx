import Seo from "@/components/Seo";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import BrandStatement from "@/components/home/BrandStatement";
import CoreValues from "@/components/home/CoreValues";
import Process from "@/components/home/Process";
import CoverageMap from "@/components/home/CoverageMap";
import SupportCTA from "@/components/home/SupportCTA";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Seo
        title="Pouzdana logistika za vaš posao | Crna Gora"
        description="Lemon Logistics — međunarodni i unutrašnji transport, skladištenje i distribucija robe u Crnoj Gori. Pouzdana organizacija, jasna komunikacija i odgovoran pristup svakom zadatku."
        path="/"
      />
      <Hero />
      <ServicesPreview />
      <BrandStatement />
      <CoreValues />
      <Process />
      <CoverageMap />
      <SupportCTA />
      <FinalCTA />
    </>
  );
}