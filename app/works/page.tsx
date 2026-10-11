
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioList from "@/components/Portfolio/PortfolioList";

export default function WorksPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <PortfolioHero />
        <PortfolioList />
      </main>

      <Footer />
    </>
  );
}
