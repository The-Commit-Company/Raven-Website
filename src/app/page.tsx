import AppsAndIntegrations from "@/components/Features/AppsAndIntegrations";
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
    <AppsAndIntegrations />
    <FeatureSwitcher />
    <FeaturesBentoGrid />
    <div className="bg-gradient-to-b from-backgroundLight to-backgroundLighter">
      <RavenGraphic />
      <OpenSource />
    </div>
    <Banner />
    <Footer />
  </div>
}
