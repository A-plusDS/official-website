import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import StudioPipeline from "@/components/StudioPipeline";
import StudioWorkbench from "@/components/StudioWorkbench";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import HomePartnerStage from "@/components/HomePartnerStage";
import HomeContactBand from "@/components/HomeContactBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />
      <HomeHero />
      <StudioPipeline />
      <StudioWorkbench />
      <HomeCaseStudies />
      <HomePartnerStage />
      <HomeContactBand />
      <Footer />
    </main>
  );
}

