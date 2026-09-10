import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioDetail from "@/components/Portfolio/PortfolioDetail";

import { getPortfolioItem } from "@/components/Portfolio/portfolioData";

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;

  const item = getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <PortfolioDetail item={item} />
      </main>

      <Footer />
    </>
  );
}