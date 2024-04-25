import Faq from "@/components/sections/home/Faq";
import Feature from "@/components/sections/home/Feature";
import Footer from "@/components/sections/home/Footer";
import Header from "@/components/sections/home/Header";
import Hero from "@/components/sections/home/Hero";
import Pricing from "@/components/sections/home/Pricing";
import Testemonial from "@/components/sections/home/Testemonial";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Feature />
      <Testemonial />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
