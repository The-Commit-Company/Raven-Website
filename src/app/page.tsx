import FeaturesBentoGrid from "@/components/Features/FeaturesBentoGrid";
import FeatureSwitcher from "@/components/Features/FeatureSwitcher";
import OpenSource from "@/components/Features/OpenSource";
import RavenGraphic from "@/components/Features/RavenGraphic";
import Banner from "@/components/Footer/Banner";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <FeatureSwitcher />
    <FeaturesBentoGrid />
    <div className="bg-gradient-to-b from-[#F8F9FA] to-[#FDFDFE]">
      <RavenGraphic />
      <OpenSource />
    </div>
    <Banner />
    <Footer />
  </div>
}
