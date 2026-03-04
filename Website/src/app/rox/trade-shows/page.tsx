import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TradeShowsROXCalculator from "@/components/rox/TradeShowsROXCalculator";

export const metadata = {
  title: "Trade Shows ROX Calculator | Momentify",
  description:
    "Calculate your Trade Show ROX score across lead capture, engagement quality, follow-up speed, and conversion effectiveness. See where your events stand.",
};

export default function TradeShowsROXPage() {
  return (
    <main>
      <Navigation />
      <TradeShowsROXCalculator />
      <Footer />
    </main>
  );
}
