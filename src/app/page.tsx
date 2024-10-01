import AIFeatures from "@/components/Features/AIFeatures/AIFeatures";
import AppsAndIntegrations from "@/components/Features/IntegrationFeatures/AppsAndIntegrations";
import RavenGraphic from "@/components/Features/RavenUI/RavenGraphic";
import Banner from "@/components/Footer/Banner";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OpenSource from "@/components/Features/OpenSource/OpenSource";
import FeaturesBentoGrid from "@/components/Features/BaseFeatures/FeaturesBentoGrid";
import FeatureSwitcher from "@/components/Features/NotableFeatures/FeatureSwitcher";


export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <AppsAndIntegrations />
    <AIFeatures />
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
