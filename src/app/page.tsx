import FeaturesBentoGrid from "@/components/Features/FeaturesBentoGrid";
import FeatureSwitcher from "@/components/Features/FeatureSwitcher";
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
    <div className="bg-gray-800">
      <Banner />
      <Footer />
    </div>
  </div>
}
