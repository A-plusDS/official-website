import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeServicesStage from "@/components/HomeServicesStage";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import HomePartnerStage from "@/components/HomePartnerStage";
import HomeContactBand from "@/components/HomeContactBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />
      <HomeHero />
      <HomeServicesStage />
      <HomeCaseStudies />
      <HomePartnerStage />
      <HomeContactBand />
      <Footer />
    </main>
  );
}

