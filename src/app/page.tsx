import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FeaturesBentoGrid from "@/components/FeaturesBentoGrid";
import '../app/globals.css';
import FeatureSwitcher from "@/components/FeatureSwitcher";

export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <FeatureSwitcher />
    <FeaturesBentoGrid />
    <div className="bg-gray-800">
      <Banner />
      <Footer />
    </div>
  </div>
}
