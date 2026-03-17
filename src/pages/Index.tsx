import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import StatsBar from "@/components/StatsBar";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <Products />
      <StatsBar />
      <Benefits />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
