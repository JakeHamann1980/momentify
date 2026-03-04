import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TradeShowsSolution from "@/components/solutions/TradeShowsSolution";

export const metadata = {
  title: "Trade Shows and Exhibits | Momentify",
  description:
    "Your booth deserves better than a badge scan. See how Momentify helps trade show teams capture intent, score leads, and follow up before the competition does.",
};

export default function TradeShowsPage() {
  return (
    <main>
      <Navigation />
      <TradeShowsSolution />
      <Footer />
    </main>
  );
}
